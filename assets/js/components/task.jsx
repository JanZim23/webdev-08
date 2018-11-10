import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Route, Redirect } from 'react-router'

import { Link } from 'react-router-dom';
import api from '../api';

import AssignDropdown from './assigndropdown';


function statusButton(task) {
  if(task.complete) {
    return <button className="btn btn-success" disabled>Complete</button>
  } else if(task.assigned_to !== null){
    return <button className="btn btn-info">Assigned</button>
  } else {
    return <button className="btn btn-warning">Unassigned</button>
  }
}

function assignedField(task, alt = "") {
  if(task.assigned_to !== null) {
    return task.assigned_to.data.fullname
  }

  return alt;
}




export function TaskRow(props) {
  let task = props.task;

  let status = statusButton(task);


  let assigned = assignedField(task, "");


  return <tr><td>{task.id}</td>
        <td><Link to={"/task/"+task.id}>{task.name}</Link></td>
        <td>{task.description.substring(0,20)}</td>
        <td>{task.time_spent}</td>
        <td>{task.owner.data.fullname}</td>
        <td>{assigned}</td>
        <td>{status}</td></tr>;
}

export function Task(props) {
  let task = props.task;

  let status = statusButton(task);
  let assigned = assignedField(task, "Not Assigned");

  let complete = (task.complete ? <button className="btn btn-warning" onClick={()=>markAs(false)}>Re-Open</button>
: <button className="btn btn-success" onClick={()=>markAs(true)}>Complete</button>);

  function markAs(complete) {
    api.complete_task(task.id, complete);
  }

  return <div>
            <h4>{task.name}</h4>
            <ul>
              <li>
                {task.description}
              </li>
              <li>
                Minutes Spent: {task.time_spent} <br />
                <button className="btn btn-success" onClick={() => api.setTaskTime(task.id, task.time_spent+15)}>+</button>
                <button className="btn btn-danger" onClick={() => api.setTaskTime(task.id, task.time_spent-15)}>-</button>
              </li>
              <li>
                <b>Owned by: </b> {task.owner.data.fullname}
              </li>
              <li>
                <b>Assigned to: </b>{assigned}
              </li>
              <li>
                Reassign to: <AssignDropdown task={task} />
              </li>
              <li>
                  {complete}
              </li>
            </ul>
          </div>;
}
