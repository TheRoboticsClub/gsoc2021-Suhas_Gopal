import { DefaultPortModel, DefaultPortModelOptions } from "@projectstorm/react-diagrams";

export class BaseInputPortModel extends DefaultPortModel {
    constructor(options: DefaultPortModelOptions) {
        super({...options, type: 'port.input'});
    }
}

export class BaseOutputPortModel extends DefaultPortModel {
    constructor(options: DefaultPortModelOptions) {
        super({...options, type: 'port.output'});
    }
}

export class BaseParameterPortModel extends DefaultPortModel {
    constructor(options: DefaultPortModelOptions) {
        super({...options, type: 'port.parameter'});
    }
}