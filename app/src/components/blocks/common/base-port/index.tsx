import { DiagramEngine, PortModel, PortModelGenerics, PortWidget } from "@projectstorm/react-diagrams";
import React, { Key } from "react";

import './styles.scss';

export type BasePortProps = {
    port: PortModel<PortModelGenerics>;
    engine: DiagramEngine;
    isInput: boolean;
    className: string;
    key?: Key
}

const BasePort: React.FC<BasePortProps> = (props) => {

    const portClass = props.isInput ? 'custom-input-port': 'custom-output-port';

    return (<div className='port-container'>
                <PortWidget {...props}>
                    <div className={`custom-port ${portClass}`}></div>
                </PortWidget>
            </div>);
}

export default BasePort;