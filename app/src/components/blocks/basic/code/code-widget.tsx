import { Card, CardContent, TextareaAutosize } from '@material-ui/core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';
import React, { ChangeEvent, MouseEventHandler, WheelEventHandler } from 'react';
import BaseBlock from '../../common/base-block';
import BasePort from '../../common/base-port';
import { CodeBlockModel } from './code-model';
import './styles.scss';


export interface CodeBlockWidgetProps {
    node: CodeBlockModel;
    engine: DiagramEngine;
}

export interface CodeBlockWidgetState {
    code: string
}

export class CodeBlockWidget extends React.Component<CodeBlockWidgetProps, CodeBlockWidgetState> {
    constructor(props: CodeBlockWidgetProps) {
        super(props);
        this.state = {
            code: this.props.node.data.code || ''
        };
    }

    render() {
        return (
            <BaseBlock selected = {this.props.node.isSelected()}>
                <div>
                    <Card variant='outlined' className="block-basic-code" raised>
                        <CardContent className='p-0'>
                            <div className='block-basic-code-parameters'>
                                {this.props.node.getParameters().map((port) => {
                                    return (
                                    <BasePort className='code-parameter-port'
                                        port={port!} 
                                        engine={this.props.engine} 
                                        isInput={true}
                                        key={port?.getID()}>
                                    </BasePort>
                                    );
                                })}
                            </div>
                            <div className='grid-container'>
                                <div className='block-basic-code-inputs'>
                                    {this.props.node.getInputs().map((port, index) => {
                                        return (
                                        <BasePort className='code-input-port'
                                            port={port!} 
                                            engine={this.props.engine} 
                                            isInput={true}
                                            key={port?.getID()}>
                                        </BasePort>
                                        );
                                    })}
                                </div>
                                <div className='block-basic-code-textarea-container'>
                                    {/* <TextareaAutosize 
                                        aria-label="code-block" 
                                        rowsMin={10}
                                        className='block-basic-code-textarea'
                                        value={this.state.code}
                                        onChange={this.handleInput}
                                        onMouseDown={this.blockMouseEvents}
                                    /> */}
                                    <textarea 
                                        aria-label='code-block'
                                        className='block-basic-code-textarea'
                                        value={this.state.code}
                                        onChange={this.handleInput}
                                        onMouseDown={this.blockMouseEvents}
                                        onWheel={this.blockScrollEvents}
                                    />
                                </div>
                                <div className='block-basic-code-outputs'>
                                    {this.props.node.getOutputs().map((port) => {
                                        return (
                                        <BasePort className='code-output-port'
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

    handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ code: event.target.value });
        this.props.node.data.code = event.target.value;
    }

    blockMouseEvents: MouseEventHandler<HTMLTextAreaElement> = (event) => {
        event.stopPropagation();
    }

    blockScrollEvents: WheelEventHandler<HTMLTextAreaElement> = (event) => {
        event.stopPropagation();
    }


}