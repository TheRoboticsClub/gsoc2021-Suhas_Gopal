import createEngine, { DiagramEngine, DiagramModel, RightAngleLinkFactory } from "@projectstorm/react-diagrams";
import { CodeBlockFactory } from "../components/blocks/basic/code/code-factory";
import { ConstantBlockFactory } from "../components/blocks/basic/constant/constant-factory";
import { InputBlockFactory } from "../components/blocks/basic/input/input-factory";
import { OutputBlockFactory } from "../components/blocks/basic/output/output-factory";
import { BaseInputPortFactory, BaseOutputPortFactory, BaseParameterPortFactory } from "../components/blocks/common/base-port/port-factory";
import { createBlock, getInitialPosition } from "../components/blocks/common/factory";
import createProjectInfoDialog from "../components/dialogs/project-info-dialog";
import { ProjectInfo } from "./constants";
import { convertToOld } from "./serialiser/converter";



class Editor {
 
    private static instance: Editor;
    private currentProjectName: string;
    private projectInfo: ProjectInfo;
    
    private stack: DiagramModel[];
    private activeModel: DiagramModel;

    public engine: DiagramEngine;


    private constructor() {
        this.currentProjectName = 'Untitled';
        this.engine = createEngine();
        this.activeModel = new DiagramModel();
        this.stack = [];
        this.engine.setModel(this.activeModel);
        this.registerFactories();
        this.projectInfo = {
            'name': '',
            'version': '',
            'description': '',
            'author': '',
            'image': ''
        };
    }

    private registerFactories() {
        this.engine.getLinkFactories().registerFactory(new RightAngleLinkFactory());
        this.engine.getPortFactories().registerFactory(new BaseInputPortFactory());
        this.engine.getPortFactories().registerFactory(new BaseOutputPortFactory());
        this.engine.getPortFactories().registerFactory(new BaseParameterPortFactory());
        this.engine.getNodeFactories().registerFactory(new ConstantBlockFactory());
        this.engine.getNodeFactories().registerFactory(new CodeBlockFactory());
        this.engine.getNodeFactories().registerFactory(new InputBlockFactory());
        this.engine.getNodeFactories().registerFactory(new OutputBlockFactory());
    }

    public static getInstance() {
        if (!Editor.instance) {
            Editor.instance = new Editor();
        }
        return Editor.instance;
    }

    public loadProject(jsonModel: any) {
        const model = new DiagramModel();
        const editor = jsonModel.editor;
        if (editor) {
            model.deserializeModel(editor, this.engine);
            this.activeModel = model;
            this.engine.setModel(model)
        }
    }

    public clearProject(): void {
        this.activeModel = new DiagramModel();
        this.engine.setModel(this.activeModel);
    }

    public serialise(): {[k: string]: any} {
        const data = convertToOld(this.activeModel, this.projectInfo);
        return { editor : this.activeModel.serialize(), ...data};
    }

    public getName(): string {
        return this.currentProjectName;
    }

    public async addBlock(name: string): Promise<void> {
        const block = await createBlock(name);
        if (block) {
            block.setPosition(...getInitialPosition())
            this.activeModel.addNode(block);
            this.engine.repaintCanvas();
        }
    }

    public async editProjectInfo(): Promise<void> {
        console.log('info')
        this.projectInfo = await createProjectInfoDialog({isOpen: true, ...this.projectInfo});
    }
}

export default Editor;

