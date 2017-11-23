import React, {Component} from 'react';

class TopNavComponent extends Component {
  render(){
    return(
      <div>
          <button onClick={() => this.props.history.push('/message_list')}> Message List </button>
      </div>
    );
  }
}

export default TopNavComponent
