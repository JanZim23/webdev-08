import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Route, Redirect } from 'react-router'

import { Link } from 'react-router-dom';

import api from '../api';
import getTaskFromList from './tasklist'
import {Task} from './task';


export default connect(({tasks}) => ({tasks}))(TaskPage);

function TaskPage(props) {
  let tasks = props.tasks;
  console.log(props);
  let task = tasks.find(task => task.id == props.match.params.id);

  if(props.tasks.length == 0) {
    return <div>Loading...</div>;
  }

  if (task == null) {
    return <div>Task Not Found!</div>;
  }

  return <div>
      <h2>Task</h2>
      <Task task={task} />
      </div>
}
