import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './components/TodoList';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TodoList/>
      </MuiThemeProvider>
    );
  }
}

export default App;
