import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ModalContainer from 'react-modal-promise';
import './App.scss';
import MenuBar from './components/menu';
import Editor from './core/editor';
import Board from './pages/board';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {

  const editor = Editor.getInstance();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App theme-dark">
        <MenuBar editor={editor}/>
        <Board editor={editor}/>
      </div>
      <ModalContainer />
    </ThemeProvider>
  );
}

export default App;
