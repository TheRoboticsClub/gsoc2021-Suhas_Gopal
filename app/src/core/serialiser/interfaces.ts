export interface Wire {
    source: {
        block: string;
        port: string;
    },
    target: {
        block: string;
        port: string;
    }
}

export interface PortName {
    name: string;
}

export interface Block {
    id: string;
    type: string;
    position: {
        x: number,
        y: number
    },
    data: any
}