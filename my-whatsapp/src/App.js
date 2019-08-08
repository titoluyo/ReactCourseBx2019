import React from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import { Fab, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: '#365F51',
        contrastText: '#fff'
      },
      secondary: {
        main: '#6aaf50',
        contrastText: '#fff'
      }
  },
  status: {
    danger: 'orange'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header></Header>
        <Body></Body>
        <div style={{ position: 'fixed', right: 10, bottom: 10 }}>
          <Fab>
          </Fab>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
