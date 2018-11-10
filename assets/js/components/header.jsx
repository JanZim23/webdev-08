import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Link } from 'react-router-dom'


import api from '../api';

export default connect(({session}) => ({session}))(Header);


function Header(props) {
  let {session} = props;
  let loggedin = session != null;

  let status = loggedin ? <HeaderCard session={session} /> : "";

  return <div>
    <h2>TaskTracker!</h2>
    {loggedin ?
      <div><span><Link to="/home">Home</Link></span><br />
      <span><Link to="/tasks">Tasks</Link></span><br />
      <span><Link to="/createtask">Create Task</Link></span><br /></div>
      :
      <div>
      <span><Link to="/login">Login</Link></span><br />
      <span><Link to="/register">Register</Link></span><br /></div>
    }
    <div className="up-right">
      {status}
    </div>
    <br />
    <br />
  </div>;
}

function HeaderCard(props) {
  return <div>
            <span>{props.session.fullname}</span><br />
            <span>{props.session.email}</span><br />
            <a onClick={() => api.logout()}>
                Logout
            </a>
        </div>;
}
