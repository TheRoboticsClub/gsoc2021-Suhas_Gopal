import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import React from "react";
import Editor from "../../../core/editor";
import { GlobalState } from "../../../core/store";
import BaseBlock from "../common/base-block";
import BasePort from "../common/base-port";
import { PackageBlockModel } from "./package-model";
import './styles.scss';


export interface PackageBlockWidgetProps {
    node: PackageBlockModel;
    engine: DiagramEngine;
    editor: Editor;
}


export class PackageBlockWidget extends React.Component<PackageBlockWidgetProps> {

    static contextType = GlobalState;

    openPackage() {
        const {setState} = this.context;
        this.props.editor.openPackage(this.props.node);
        setState({
            locked: this.props.editor.locked(),
            showingPackage: true
        })
    }

    render() {
        return (
            <BaseBlock 
                selected = {this.props.node.isSelected()}>
                <div onDoubleClick={() => this.openPackage()}>
                    <Card variant='outlined' className="block-package" raised>
                        <CardContent className='p-0'>
                            <div className='grid-container'>
                                <div className='block-package-inputs'>
                                    {this.props.node.getInputs().map((port, index) => {
                                        return (
                                        <BasePort className='package-input-port'
                                            port={port!} 
                                            engine={this.props.engine} 
                                            isInput={true}
                                            key={port?.getID()}>
                                        </BasePort>
                                        );
                                    })}
                                </div>
                                <div className='block-package-image-container'>
                                    <img 
                                        src={this.props.node.getImage()} 
                                        className='block-package-image' 
                                        draggable={false}
                                        alt={this.props.node.info.name}/>
                                </div>
                                <div className='block-package-outputs'>
                                    {this.props.node.getOutputs().map((port) => {
                                        return (
                                        <BasePort className='package-output-port'
                                            port={port!} 
                                            engine={this.props.engine} 
                                            isInput={false}
                                            key={port?.getID()}>
                                        </BasePort>
                                        );
                                    })}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </BaseBlock>
        );
    }

}