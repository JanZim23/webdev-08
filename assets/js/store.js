import { createStore, combineReducers } from 'redux';


function users(state0 = [], action) {
  switch (action.type) {
    case 'USER_LIST':
      return action.data;
    default:
      return state0;
  }
}

function tasks(state0 = [], action) {
  switch (action.type) {
    case 'TASK_LIST':
      return action.data;
    default:
      return state0;
  }
}

function session(state0 = null, action) {
  switch (action.type) {
    case 'NEW_SESSION':
      return action.data;
    case 'DELETE_SESSION':
      return null;
    default:
      return state0;
  }
}

function root_reducer(state0, action) {

  //TODO: add functions.
  let reducer = combineReducers({users, session, tasks});
  let state1 = reducer(state0, action);

  return state1;
}

let store = createStore(root_reducer);
export default store;
