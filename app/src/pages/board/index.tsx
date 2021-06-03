import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';
import React from 'react';
import CanvasContainer from '../../components/canvas/canvas-container';
import Editor from '../../core/editor';
import './styles.scss';


interface BoardProps {
    editor: Editor;
}


function Board(props: BoardProps) {

    const {editor} = props;

    return <div id='board'>
        <CanvasContainer>
            <CanvasWidget engine={editor.engine} className='canvas'/>
        </CanvasContainer>
    </div>
}

export default Board;