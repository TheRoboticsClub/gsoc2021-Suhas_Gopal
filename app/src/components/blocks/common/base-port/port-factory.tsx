import { DefaultPortFactory } from "@projectstorm/react-diagrams-defaults";

export class BaseInputPortFactory extends DefaultPortFactory {
    constructor() {
        super();
        this.type = 'port.input';
    }
}

export class BaseOutputPortFactory extends DefaultPortFactory {
    constructor() {
        super();
        this.type = 'port.output';
    }
}

export class BaseParameterPortFactory extends DefaultPortFactory {
    constructor() {
        super();
        this.type = 'port.parameter';
    }
}