import { LinkModel, PortModel } from "@projectstorm/react-diagrams";
import { DefaultPortModel, DefaultPortModelOptions } from "@projectstorm/react-diagrams-defaults";
import { RightAngleLinkModel } from "@projectstorm/react-diagrams-routing";
import { CodeBlockModel } from "../basic/code/code-model";
import { ConstantBlockModel } from "../basic/constant/constant-model";
import { AbstractModelFactory } from '@projectstorm/react-canvas-core';

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

export const createBlock = (name: string) => {
    var block;
    switch (name) {
        case 'basic.constant':
            block = new ConstantBlockModel({name: 'Frequency'})
            break;
        case 'basic.code':
            block = new CodeBlockModel({
                inputs: ['Frequency'],
                outputs: ['Print'],
                parameters: ['Multiplier']
            });
            break;
        default:
            break;
    }
    return block;
}


export const getInitialPosition = (): [number, number] => {
    return [100, 100]
}

