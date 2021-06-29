import { DefaultLinkModel, DefaultPortModel, DefaultPortModelOptions, RightAngleLinkModel } from "@projectstorm/react-diagrams";
import { AbstractModelFactory } from '@projectstorm/react-canvas-core';
import { LinkModel, PortModel } from "@projectstorm/react-diagrams";



export class BasePortModel extends DefaultPortModel {
	createLinkModel(_factory?: AbstractModelFactory<LinkModel>): LinkModel {
		return new DefaultLinkModel();
	}

    link<T extends LinkModel>(port: PortModel, factory?: AbstractModelFactory<T>): T {
		let link = this.createLinkModel(factory);
		link.setSourcePort(this);
		link.setTargetPort(port);
		return link as T;
	}

    getOptions(): BasePortModelOptions {
        return this.options;
    }
}


export interface BasePortModelOptions extends DefaultPortModelOptions {
    hideLabel?: boolean
}


export class BaseInputPortModel extends BasePortModel {
    constructor(options: BasePortModelOptions) {
        super({...options, type: 'port.input'});
    }
}

export class BaseOutputPortModel extends BasePortModel {
    constructor(options: BasePortModelOptions) {
        super({...options, type: 'port.output'});
    }
}

export class BaseParameterPortModel extends BasePortModel {
    constructor(options: BasePortModelOptions) {
        super({...options, type: 'port.parameter'});
    }
}