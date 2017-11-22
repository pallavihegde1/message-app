import React, {Component} from 'react';
import MessageView from './message-view'

class MessageList extends Component {
  state = {
    message: {
      from: 'pallavi',
      content: 'hihihihi',
      status: 'read'
    }
  }
  render(){
    return(
      <div>
        <MessageView message={this.state.message}/>
      </div>
    );
  }
}

export default MessageList
