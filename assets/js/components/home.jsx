import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Route, Redirect } from 'react-router'

import api from '../api';
import {TaskList} from './tasklist'

export default connect(({session,tasks}) => ({session,tasks}))(Home);

function Home(props) {
  let {session, tasks} = props;
  if(session === null) {
    return <div><Redirect to="/login"/></div>;
  }

  let assignedtasks = tasks.filter(task => task.assigned_to !== null && task.assigned_to.data.id == session.user_id)
  let mytasks = tasks.filter(task => task.owner.data.id == session.user_id)

  return <div>
    <h3>Home</h3>
    <h4>Tasks Assigned to Me</h4>
    <TaskList tasks={assignedtasks} />
    <h4>Tasks Owned by Me</h4>
    <TaskList tasks={mytasks} />
  </div>;
}
