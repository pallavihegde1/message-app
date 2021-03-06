import React, {Component} from 'react';
import MessageView from './message-view'
import UserList from './user-list'

class MessageList extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: null,
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
    };
  }

  // componentDidMount() {
  //
  // }
  //
  // componentWillUnmount() {
  //
  // }

  buttonClick = (e) => {
    this.setState({value: 'X'})
  }

  changeState = (e) => {
    this.setState({value: this.state.value + 'Y'})
  }


  changeStateCorrect = (e) => {
    this.setState((prevState) => ({
       value: prevState.value + 'new_state'
    }));
  }

  render(){
    const usersindex = this.state.users.map((user,index) => (
      <UserList key={index} user={user}/>
    ))

    return(
      <div>
        <button className="square" onClick={this.buttonClick}> Click </button>
        <button className="square" onClick={this.changeState}> Change State </button>
        <button className="square" onClick={this.changeStateCorrect}> Change state preferred </button>
        <MessageView message={this.state.message} messages={this.state.messages} users={this.state.users}/>
        <hr/>
        {usersindex}
        { this.state.value}
      </div>
    );
  }
}

export default MessageList
