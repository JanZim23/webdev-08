import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Route, Redirect } from 'react-router'

import api from '../api';

import {TaskRow} from './task';


export default connect(({tasks}) => ({tasks}))(TaskList);



export function TaskList(props) {
  let {tasks} = props;
  let list = _.map(tasks, (t) =>
    <TaskRow task={t} key={t.id} />);

  return <div>
    <table>
      <tbody>
        <tr>
          <td>id</td>
          <td>Name</td>
          <td>Description</td>
          <td>Minutes-Spent</td>
          <td>Owner</td>
          <td>Assigned To</td>
          <td>Status</td>
        </tr>
        {list}
      </tbody>
    </table>
  </div>;
}
