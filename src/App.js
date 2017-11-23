import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { routes } from './routes';
import MessageList from './Components/message-list'
import Home from './Components/home'
import TopNavComponent from './Components/top_nav_component'

// take in incoming props since this is a functional component
const LoggedInComponent = (props) => (
  <div>
    <TopNavComponent history={props.history}/>
    <hr/>
    {routes()}
  </div>
)

// const unauthenticatedComponent = () => (
//   <div>
//     {restrictedRoutes()}
//   </div>
// )

class App extends Component {
  render() {
    // pclass is holds the styling of paragraph element
    const pclass={
      color: 'green',
      background: 'yellow'
    }
    return (
      <LoggedInComponent history={this.props.history}/>
    );
  }
}

export default App;
