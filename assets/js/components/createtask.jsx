import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Route, Redirect } from 'react-router'

import { withRouter } from 'react-router-dom'

import api from '../api';

export default withRouter(CreateTask)

function CreateTask(props) {

  let name = null;
  let desc = null;

  function create() {
    api.createtask(name, desc);
    props.history.push("/home");
  }

  return <div>
    <h3>Create Task</h3>
    <input type="text" placeholder="Name" onChange={(e) => name = e.target.value}/>
    <input type="text" placeholder="Description" onChange={(e) => desc = e.target.value}/>
    <button onClick={() => create()}>Create</button>
  </div>;
}
