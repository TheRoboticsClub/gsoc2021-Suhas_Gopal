import { NodeModelGenerics } from "@projectstorm/react-diagrams";
import { NodeModel, PortModelAlignment } from "@projectstorm/react-diagrams-core";
import { DeserializeEvent } from '@projectstorm/react-canvas-core';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { createPortModel } from "../../common/factory";

export interface CodeBlockModelOptions extends BaseModelOptions {
    inputs?: string[];
    outputs?: string[];
    parameters?: string[];
}

export class CodeBlockModel extends NodeModel<NodeModelGenerics & CodeBlockModelOptions> {
    public code: string;
    private inputs: string[];
    private outputs: string[];
    private parameters: string[];

    constructor(options: CodeBlockModelOptions) {
        super({
            ...options,
            type: 'basic.code'
        });
        this.code = '';
        this.inputs = options.inputs || [];
        this.outputs = options.outputs || [];
        this.parameters = options.parameters || [];
        
        this.inputs.forEach((port) => {
            this.addPort(
                createPortModel({
                    in: true,
                    name: port,
                    alignment: PortModelAlignment.LEFT,
                })
            );
        });

        this.outputs.forEach((port) => {
            this.addPort(
                createPortModel({
                    in: false,
                    name: port,
                    alignment: PortModelAlignment.RIGHT
                })
            )
        });

        this.parameters.forEach((port) => {
            this.addPort(
                createPortModel({
                    in: true,
                    name: port,
                    alignment: PortModelAlignment.TOP
                })
            )
        });
    }

    getInputs() {
        return this.inputs.map((port) => this.getPort(port));
    }

    getOutputs() {
        return this.outputs.map((port) => this.getPort(port));
    }

    getParameters() {
        return this.parameters.map((port) => this.getPort(port));
    }

    serialize() {
        return {
            ...super.serialize(),
            code: this.code,
            inputs: this.inputs,
            parameters: this.parameters,
            outputs: this.outputs
        }
    }

    deserialize(event: DeserializeEvent<this>): void {
        super.deserialize(event);
        this.code = event.data.code;
        this.inputs = event.data.inputs;
        this.parameters = event.data.parameters;
        this.outputs = event.data.outputs;
    }

}