import React, {Component} from 'react';

class MessageForm extends Component{
  constructor(props){
    super(props);

    this.state = {message: ''};
  }

  handleChange = (event) => {
    this.setState({message: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    console.log(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        {/* <MessageList message={this.state.message} /> */}
      </div>

    );
  }
}

export default MessageForm
