import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.scss';
import MenuBar from './components/menu';
import Editor from './pages/editor';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App theme-dark">
        <MenuBar />
        <Editor />
      </div>
    </ThemeProvider>
  );
}

export default App;
