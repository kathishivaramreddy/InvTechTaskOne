import React, { Component } from 'react';
import {TaskList} from './TaskList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <TaskList/>
      </div>
    );
  }
}

export default App;
