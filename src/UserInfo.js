import React, { Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photoURL, displayName } = this.props;
    return (
      <aside className="UserInfo">
        <img src={ photoURL } alt="Picture of User"/>
        <h3>{ displayName }</h3>
      </aside>
    )
  }
}

export default UserInfo;
