import { AppBar, Button, Toolbar, useTheme } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

import './styles.scss'

import logo from '../../assets/images/logo.png';
import { ClickEvent, Menu, MenuItem, SubMenu } from '@szhsin/react-menu';


function MenuBar() {

    const theme = useTheme();
    const isDark = theme.palette.type === 'dark';
    const fileReader = new FileReader();

    const setBlock = (type: string) => {
        console.log(type);
    }


    const newProject = (_event: ClickEvent) => {

    }

    const openProject = (_event: ClickEvent) => {
        document.getElementById('openProjectInput')?.click();
        fileReader.onload = (event) => console.log(event.target?.result);
    }

    const saveProject = (_event: ClickEvent) => {

    }

    const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.length ? event.target.files[0] : null;
        
        if (file) {
            fileReader.readAsText(file);
        }
    }

    return (
        <AppBar position="static" className='menu-bar' id='menu-bar'>
            <Toolbar >
                <img src={logo} alt="Visual Circuit" width='50px' style={{ marginRight: '1em' }} />
                <Menu
                    menuButton={<Button>File</Button>}
                    theming={isDark ? 'dark': undefined}>
                    <MenuItem onClick={newProject}>New File</MenuItem>
                    <MenuItem onClick={openProject}>Open</MenuItem>
                    <MenuItem onClick={saveProject}>Save as..</MenuItem>
                </Menu>
                <div style={{ flex: 1 }} />
                <Menu
                    menuButton={<Button>Basic</Button>}
                    theming={isDark ? 'dark': undefined}>
                    <MenuItem onClick={() => setBlock('basic.constant')}>Constant</MenuItem>
                    <MenuItem onClick={() => setBlock('basic.code')}>Code</MenuItem>
                    <MenuItem onClick={() => setBlock('basic.information')}>Information</MenuItem>
                </Menu>

                <Menu
                    menuButton={<Button>Blocks</Button>}
                    theming={isDark ? 'dark': undefined}>
                    <SubMenu label="OpenCV">
                        <MenuItem onClick={() => setBlock('blocks.opencv.blur')}>Blur</MenuItem>
                        <MenuItem onClick={() => setBlock('blocks.opencv.edgeDetection')}>EdgeDetection</MenuItem>
                    </SubMenu>
                </Menu>
            </Toolbar>

            <input type='file' id='openProjectInput' accept='.vc' onChange={onFileUpload} hidden/>
        </AppBar>
    )
}

export default MenuBar;