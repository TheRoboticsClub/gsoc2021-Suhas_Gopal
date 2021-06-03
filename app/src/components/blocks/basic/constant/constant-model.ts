import { NodeModelGenerics } from "@projectstorm/react-diagrams";
import { NodeModel, PortModel, PortModelAlignment } from "@projectstorm/react-diagrams-core";
import { DeserializeEvent } from '@projectstorm/react-canvas-core';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { createPortModel } from "../../common/factory";

export interface ConstantBlockModelOptions extends BaseModelOptions {
    name: string;
}

export class ConstantBlockModel extends NodeModel<NodeModelGenerics & ConstantBlockModelOptions> {
    public name: string;
    public value: any;

    constructor(options: ConstantBlockModelOptions) {
		super({
			...options,
			type: 'basic.constant'
		});
        this.name = options.name;
        
        

        this.addPort(
			createPortModel({
				in: false,
				name: 'out',
                alignment: PortModelAlignment.BOTTOM,
                label: 'out'
			})
		);
    }

    getPort(): PortModel {
        return super.getPort('out')!;
    }

    serialize() {
        return {
            ...super.serialize(),
            name: this.name,
            value: this.value
        }
    }

    deserialize(event: DeserializeEvent<this>): void {
        super.deserialize(event);
        this.name = event.data.name;
        this.value = event.data.value;
    }

}