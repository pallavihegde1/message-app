import React, {Component} from 'react';

class TopNavComponent extends Component {
  render(){
    return(
      <div>
          <button onClick={() => this.props.history.push('/home')}> Home </button>
          <button onClick={() => this.props.history.push('/message_list')}> Message List </button>
          <button onClick={()=> this.props.history.push('/message_form')}> Message form </button>
      </div>
    );
  }
}

export default TopNavComponent
