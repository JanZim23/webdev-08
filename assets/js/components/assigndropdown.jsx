import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Route, Redirect } from 'react-router'

import { Link } from 'react-router-dom';
import api from '../api';


export default connect(({users}) => ({users}))(AssignDropdown);

function AssignDropdown(props) {
  let {task, users} = props;

  function assign(user_id) {
    if(user_id == "none") {user_id = null;}
    api.assign_task(task.id, user_id);
  }

  let ops = _.map(users, user =>
    <option key={"op"+user.id} value={user.id}>{user.fullname}</option>);

  ops.push(<option key="opnull" value="none">None</option>)

  let currentAssignment = (task.assigned_to == null ? 'none' : task.assigned_to.data.id);

  return <div>
        <select value={currentAssignment} onChange={(ev)=>assign(ev.target.value)}>
          {ops}
        </select>
      </div>
}
