import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './Components/message-list'

class App extends Component {
  render() {
    // pclass is holds the styling of paragraph element
    const pclass={
      color: 'green',
      background: 'yellow'
    }
    return (
      <MessageList/>
    );
  }
}

export default App;
