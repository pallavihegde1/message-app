import React, {Component} from 'react';


class UserList extends Component {
  render(){
    console.log(this.props)
    return(
      <div className="container">
        hi
        { /*single user div*/ }
        <div className="userList">
          <div className="username">
              <span className="label">user name: </span>
              <span className="value">{this.props.user.name}</span>
          </div>
          <div className="status">
              <span className="label">age: </span>
              <span className="value">{this.props.user.age}</span>
          </div>
        </div>
      </div>
    );
  }

};


export default UserList;
