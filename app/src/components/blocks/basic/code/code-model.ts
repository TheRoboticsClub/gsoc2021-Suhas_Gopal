import { NodeModelGenerics } from "@projectstorm/react-diagrams";
import { PortModelAlignment } from "@projectstorm/react-diagrams-core";
import { DeserializeEvent } from '@projectstorm/react-canvas-core';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import { createPortModel } from "../../common/factory";
import BaseModel from "../../common/base-model";
import { PortName } from "../../../../core/serialiser/interfaces";
import { PortTypes } from "../../../../core/constants";

export interface CodeBlockModelOptions extends BaseModelOptions {
    inputs?: string[];
    outputs?: string[];
    params?: string[];
}

interface CodeBlockData {
    code: string;
    params?: PortName[],
    ports: {
        in: PortName[],
        out: PortName[]
    }
}

export class CodeBlockModel extends BaseModel<CodeBlockData, NodeModelGenerics & CodeBlockModelOptions> {


    constructor(options: CodeBlockModelOptions) {
        super({
            ...options,
            type: 'basic.code'
        });
        
        this.data = {
            code: '',
            params: options.params?.map((port) => {
                return {name: port}
            }) || [],
            ports: {
                in: options.inputs?.map((port) => {
                    return {name: port}
                }) || [],
                out: options.outputs?.map((port) => {
                    return {name: port}
                }) || []
            }
        }

        // if (options.params && options.params.length) {
        //     this.data.params = options.params?.map((port) => {
        //         return {name: port}
        //     });
        // }

        // if (options.inputs && options.inputs.length) {
        //     this.data.ports['in'] = options.inputs.map((port) => {
        //         return {name: port}
        //     });
        // }

        // if (options.outputs && options.outputs.length) {
        //     this.data.ports['out'] = options.outputs.map((port) => {
        //         return {name: port}
        //     });
        // }
        
        options.inputs?.forEach((port) => {
            this.addPort(
                createPortModel({
                    in: true,
                    name: port,
                    alignment: PortModelAlignment.LEFT,
                    type: PortTypes.INPUT
                })
            );
        });

        options.outputs?.forEach((port) => {
            this.addPort(
                createPortModel({
                    in: false,
                    name: port,
                    alignment: PortModelAlignment.RIGHT,
                    type: PortTypes.OUTPUT
                })
            )
        });

        options.params?.forEach((port) => {
            this.addPort(
                createPortModel({
                    in: true,
                    name: port,
                    alignment: PortModelAlignment.TOP,
                    type: PortTypes.PARAM
                })
            )
        });
    }

    getInputs() {
        return this.getData().ports.in?.map((port) => this.getPort(port.name)) || [];
    }

    getOutputs() {
        return this.getData().ports.out?.map((port) => this.getPort(port.name)) || [];
    }

    getParameters() {
        return this.getData().params?.map((port) => this.getPort(port.name)) || [];
    }

    getData(): CodeBlockData {
        return this.data;
    }

    serialize() {
        return {
            ...super.serialize(),
            data : this.getData()
        }
    }

    deserialize(event: DeserializeEvent<this>): void {
        super.deserialize(event);
        this.data = event.data.data;
    }

}