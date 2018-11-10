import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Route, Redirect } from 'react-router'


import api from '../api';

export default connect(({session}) => ({session}))(Login);


function Login(props) {
  let {session} = props;
  if(session != null) {
    return <div><Redirect to="/home" /></div>
  }

  let email = null;
  let password = null;
  function login() {
    api.login(email,password);
  }

  return <div>
    <h3>Login</h3>
    <div className="form-inline my-2">
      <input type="email" placeholder="email" onChange={(ev) => email = ev.target.value}/>
      <input type="password" placeholder="password" onChange={(ev) => password = ev.target.value}/>
      <button className="btn btn-primary" onClick={() => login()}>
        Login
      </button>
    </div>
  </div>;
}
