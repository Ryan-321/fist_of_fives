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
        <img src={ photoURL } alt="Picture of User" className="UserInfo--img" />
        <h3>{ displayName }</h3>
        <button>
          Sign Out
        </button>
      </aside>
    )
  }
}

export default UserInfo;
