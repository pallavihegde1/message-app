import React, {Component} from 'react';
import MessageView from './message-view'
import UserList from './user-list'

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
    ],
    users: [
      {
        name: 'pallavi',
        age: 18
      },
      {
        name: 'ashwini',
        age: 20
      }
    ]
  }

  render(){
    const usersindex = this.state.users.map((user,index) => (
      <UserList key={index} user={user}/>
    ))
    return(
      <div>
        <MessageView message={this.state.message} messages={this.state.messages} users={this.state.users}/>
        <hr/>
        {usersindex}
      </div>
    );
  }
}

export default MessageList
