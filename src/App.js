import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageView from './Components/message-view'

class App extends Component {
  render() {
    // pclass is holds the styling of paragraph element
    const pclass={
      color: 'green',
      background: 'yellow'
    }
    return (
      <MessageView/>
    );
  }
}

export default App;
