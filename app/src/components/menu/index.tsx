import { AppBar, Button, Toolbar, useTheme } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

import './styles.scss'

import logo from '../../assets/images/logo.png';
import { ClickEvent, Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import Editor from '../../core/editor';
import { textFile2DataURL } from '../../core/utils';
import { PROJECT_FILE_EXTENSION } from '../../core/constants';

export interface MenuBarProps {
    editor: Editor;
}

function MenuBar(props: MenuBarProps) {

    const theme = useTheme();
    const isDark = theme.palette.type === 'dark';
    const fileReader = new FileReader();
    const {editor} = props;

    const setBlock = (type: string) => {
        editor.addBlock(type);
    }


    const newProject = (_event: ClickEvent) => {
        editor.clearProject();
    }

    const openProject = (_event: ClickEvent) => {
        document.getElementById('openProjectInput')?.click();
        fileReader.onload = (event) => {
            if (event.target?.result) {
                editor.loadProject(JSON.parse(event.target.result.toString()))
            }
        };
    }

    const saveProject = (_event: ClickEvent) => {
        const model = editor.serialise();
        const url = textFile2DataURL(JSON.stringify(model), 'text/json');
        const link = document.getElementById('saveProjectLink');
        link?.setAttribute('href', url);
        link?.setAttribute('download', editor.getName() + PROJECT_FILE_EXTENSION);
        link?.click();
    }

    const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.length ? event.target.files[0] : null;
        
        if (file) {
            fileReader.readAsText(file);
        }
    }

    const editProjectInfo = (_event: ClickEvent) => {
        editor.editProjectInfo();
    }

    return (
        <AppBar position="static" className='menu-bar' id='menu-bar'>
            <Toolbar >
                <img src={logo} alt="Visual Circuit" width='50px' style={{ marginRight: '1em' }} />
                <Menu
                    menuButton={<Button className='menu-button'>File</Button>}
                    theming={isDark ? 'dark': undefined}>
                    <MenuItem onClick={newProject}>New File</MenuItem>
                    <MenuItem onClick={openProject}>Open</MenuItem>
                    <MenuItem onClick={saveProject}>Save as..</MenuItem>
                </Menu>
                <Menu
                    menuButton={<Button className='menu-button'>Edit</Button>}
                    theming={isDark ? 'dark': undefined}>
                    <MenuItem onClick={editProjectInfo}>Edit Project Information</MenuItem>
                </Menu>
                <div style={{ flex: 1 }} />
                <Menu
                    menuButton={<Button className='menu-button'>Basic</Button>}
                    theming={isDark ? 'dark': undefined}>
                    <MenuItem onClick={() => setBlock('basic.constant')}>Constant</MenuItem>
                    <MenuItem onClick={() => setBlock('basic.code')}>Code</MenuItem>
                    <MenuItem onClick={() => setBlock('basic.input')}>Input</MenuItem>
                    <MenuItem onClick={() => setBlock('basic.output')}>Output</MenuItem>
                    <MenuItem onClick={() => setBlock('basic.information')}>Information</MenuItem>
                </Menu>

                <Menu
                    menuButton={<Button className='menu-button'>Blocks</Button>}
                    theming={isDark ? 'dark': undefined}>
                    <SubMenu label="OpenCV">
                        <MenuItem onClick={() => setBlock('blocks.opencv.blur')}>Blur</MenuItem>
                        <MenuItem onClick={() => setBlock('blocks.opencv.edgeDetection')}>EdgeDetection</MenuItem>
                    </SubMenu>
                </Menu>
            </Toolbar>

            <input type='file' id='openProjectInput' accept={PROJECT_FILE_EXTENSION} onChange={onFileUpload} hidden/>
            <a href='/' id='saveProjectLink' hidden download>Download Project</a>
        </AppBar>
    )
}

export default MenuBar;