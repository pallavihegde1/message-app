import React, {Component} from 'react';

class MessageForm extends Component{
  constructor(props){
    super(props);

    this.state = {title: ''};
  }

  handleChange(event){
    this.setState({title: event.target.value});
  }

  render() {
    return(
      <div>
        <form>
          <input type="text" name="content" value={this.state.title} onChange={this.handleChange.bind(this)}/>
        </form>
      </div>

    );
  }
}

export default MessageForm
