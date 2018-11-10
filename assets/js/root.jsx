import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import $ from 'jquery';

import api from './api';

import { Provider } from 'react-redux';
import { Link, BrowserRouter, Route} from 'react-router-dom';
import { Redirect } from 'react-router'

import Header from './components/header';
import Login from './components/login';
import Home from './components/home';
import Register from './components/register';
import UserList from './components/userlist';
import TaskList from './components/tasklist';
import TaskPage from './components/taskpage';


import CreateTask from './components/createtask';


export default function root_init(node, store) {

  if(window.session != null) {
    store.dispatch({
      type: 'NEW_SESSION',
      data: window.session,
    });
  }

  api.fetch_tasks();
  api.fetch_users();

  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>, node);
}

function Root(props) {
  return <div>
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact={true} render={() =>
          <Redirect to="/home" />
        } />
        <Route path="/home" exact={true} render={() =>
          <Home />
        } />
        <Route path="/login" exact={true} render={() =>
          <Login />
        } />
        <Route path="/register" exact={true} render={() =>
          <Register />
          } />
        <Route path="/tasks" exact={true} render={() =>
          <TaskList />
        } />
      <Route path="/task/:id" component={TaskPage} />
      <Route path="/createtask" exact={true} render={() =>
        <CreateTask />
      } />
      </div>
    </BrowserRouter>
  </div>;
}

/**



*/
