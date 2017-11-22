import React, {Component} from 'react';

class MessageView extends Component {
  render(){
    console.log(this.props)
    return(
      <div className="container">
        hi
        { /*single user div*/ }
        <div className="singleMessage">
          <div className="from">
              <span className="label">From: </span>
              <span className="value">{this.props.message.from}</span>
          </div>
          <div className="status">
              <span className="label">Status: </span>
              <span className="value">{this.props.message.status}</span>
          </div>
          <div className="message">
              <span className="label">Message: </span>
              <span className="value">{this.props.message.content}</span>
          </div>
        </div>
        { /* multi messages render */ }
        <div className="messageList">
           { this.props.messages.map((message,index) => (
            <li key={index}> {message.message}</li>
          ))}
        </div>
      </div>
    );
  }

}


export default MessageView;
