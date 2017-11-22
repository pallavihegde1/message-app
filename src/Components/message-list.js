import React, {Component} from 'react';
import MessageView from './message-view'

class MessageList extends Component {
  state = {
    message: {
      from: 'pallavi',
      content: 'hihihihi',
      status: 'read'
    },
      messages:  [
          {
          from: 'John',
          message: 'The event will start next week',
          status: 'unread'
          },
          {
          from: 'Martha',
          message: 'I will be traveling soon',
          status: 'read'
          },
          {
          from: 'Jacob',
          message: 'Talk later. Have a great day!',
          status: 'read'
          }
    ]
  }
  render(){
    return(
      <div>
        <MessageView message={this.state.message} messages={this.state.messages}/>
      </div>
    );
  }
}

export default MessageList
