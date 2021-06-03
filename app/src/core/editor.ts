import createEngine, { DiagramEngine, DiagramModel, RightAngleLinkFactory } from "@projectstorm/react-diagrams";
import { CodeBlockFactory } from "../components/blocks/basic/code/code-factory";
import { ConstantBlockFactory } from "../components/blocks/basic/constant/constant-factory";
import { createBlock, getInitialPosition } from "../components/blocks/common/factory";

class Editor {
 
    private static instance: Editor;
    private currentProjectName: string;
    
    private stack: DiagramModel[];
    private activeModel: DiagramModel;

    public engine: DiagramEngine;


    private constructor() {
        this.currentProjectName = 'Untitled';
        this.engine = createEngine();
        this.activeModel = new DiagramModel();
        this.stack = [];
        this.engine.setModel(this.activeModel);
        this.registerFactories()
    }

    private registerFactories() {
        this.engine.getLinkFactories().registerFactory(new RightAngleLinkFactory());
        this.engine.getNodeFactories().registerFactory(new ConstantBlockFactory());
        this.engine.getNodeFactories().registerFactory(new CodeBlockFactory());
    }

    public static getInstance() {
        if (!Editor.instance) {
            Editor.instance = new Editor();
        }
        return Editor.instance;
    }

    public loadProject(jsonModel: any) {
        // console.log(jsonModel);
        const model = new DiagramModel();
        model.deserializeModel(jsonModel, this.engine);
        this.activeModel = model;
        this.engine.setModel(model)
    }

    public clearProject(): void {
        this.activeModel = new DiagramModel();
        this.engine.setModel(this.activeModel);
    }

    public serialise(): {[k: string]: any} {
        return this.activeModel.serialize();
    }

    public getName(): string {
        return this.currentProjectName;
    }

    public addBlock(name: string): void {
        const block = createBlock(name);
        if (block) {
            block.setPosition(...getInitialPosition())
            this.activeModel.addNode(block);
            this.engine.repaintCanvas();
        }
    }
}

export default Editor;

