import { AbstractModelFactory } from '@projectstorm/react-canvas-core';
import { LinkModel, PortModel } from "@projectstorm/react-diagrams";
import { DefaultPortModel, DefaultPortModelOptions } from "@projectstorm/react-diagrams-defaults";
import { RightAngleLinkModel } from "@projectstorm/react-diagrams-routing";
import createCodeDialog from '../../dialogs/code-block-dialog';
import createConstantDialog from "../../dialogs/constant-block-dialog";
import { CodeBlockModel } from "../basic/code/code-model";
import { ConstantBlockModel } from "../basic/constant/constant-model";


export class RightAnglePortModel extends DefaultPortModel {
	createLinkModel(_factory?: AbstractModelFactory<LinkModel>): LinkModel {
		return new RightAngleLinkModel();
	}

    link<T extends LinkModel>(port: PortModel, factory?: AbstractModelFactory<T>): T {
		let link = this.createLinkModel(factory);
		link.setSourcePort(this);
		link.setTargetPort(port);
		return link as T;
	}
}

export const createPortModel = (options: DefaultPortModelOptions) => {
    return new DefaultPortModel(options);
} 

export const createBlock = async (name: string) => {
    var block;
    var data;
    try {
        switch (name) {
            case 'basic.constant':
                data = await createConstantDialog({isOpen: true});
                block = new ConstantBlockModel(data)
                break;
            case 'basic.code':
                data = await createCodeDialog({isOpen: true});
                block = new CodeBlockModel(data);
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error);
    }
    return block;
}


export const getInitialPosition = (): [number, number] => {
    return [100, 100]
}

