import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Route, Redirect } from 'react-router'


import api from '../api';

export default connect(({session}) => ({session}))(Register);


function Register(props) {
  let {session} = props;
  if(session != null) {
    return <div><Redirect to="/home" /></div>
  }
  

  let email = null;
  let fullname = null;
  let password = null;
  let passwordc = null;
  function register() {
    if(password != passwordc) {
      alert("Passwords must match!");
    } else if (email == null || fullname == null || password == null) {
      alert("Cant have empty fields.");
    } else{
      api.register(email,password, fullname);
    }
  }

  return <div>
    <h3>Register</h3>
    <div className="form-inline my-2">
      <input type="email" placeholder="email" onChange={(ev) => email = ev.target.value}/>
      <input type="text" placeholder="Full Name" onChange={(ev) => fullname = ev.target.value}/>
      <input type="password" placeholder="password" onChange={(ev) => password = ev.target.value}/>
      <input type="password" placeholder="password" onChange={(ev) => passwordc = ev.target.value}/>
      <button className="btn btn-primary" onClick={() => register()}>
        Register
      </button>
    </div>
  </div>;
}
