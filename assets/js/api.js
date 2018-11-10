import store from './store';


class API {

  apiError(resp) {
    console.log("API ERROR:",resp);
  }

  sendPost(path, payload, callback) {
    let state = store.getState();

    //Attach the token if user is logged in.
    if(state.session != null) {
      payload.token = state.session.token;
    }

    $.ajax(path, {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(payload),
      success: callback,
      error: this.apiError,
    });
  }

  sendPatch(path, payload, callback) {
    let state = store.getState();

    //Attach the token if user is logged in.
    if(state.session != null) {
      payload.token = state.session.token;
    }

    $.ajax(path, {
      method: "patch",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(payload),
      success: callback,
      error: this.apiError,
    });
  }

  sendGet(path, callback) {
    let state = store.getState();
    let payload = {};
    //Attach the token if user is logged in.
    if(state.session != null) {
      payload.token = state.session.token;
    }

    $.ajax(path, {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(payload),
      success: callback,
      error: this.apiError,
    });
  }

  login(email,password) {
    this.sendPost('/api/v1/login', {email,password}, (resp) => {
      store.dispatch({
        type: 'NEW_SESSION',
        data: resp.data,
      });
    })
  }

  logout() {
    this.sendPost('/api/v1/logout', {}, (resp) => {
      store.dispatch({
        type: 'DELETE_SESSION'
      });
    })
  }

  fetch_tasks() {
    this.sendGet('/api/v1/tasks', (resp) => {
      store.dispatch({
        type: 'TASK_LIST',
        data: resp.data
      });
    });
  }


  fetch_users() {
    this.sendGet('/api/v1/users', (resp) => {
      store.dispatch({
        type: 'USER_LIST',
        data: resp.data
      });
    });
  }

  complete_task(task_id, complete = true) {
    this.sendPatch('/api/v1/tasks/'+task_id, {task: {complete: complete}}, (resp) => {
      this.fetch_tasks();
      });
  }


  assign_task(task_id, user_id) {
    this.sendPatch('/api/v1/tasks/'+task_id, {task: {assigned_to: user_id}}, (resp) => {
      this.fetch_tasks();
      });
  }

  createtask(name, desc) {
    this.sendPost("/api/v1/tasks",
      {task: {name: name, description: desc, owner: store.getState().session.user_id}},
      (resp) => {
        this.fetch_tasks();
      })

  }

  register(email, name, password) {
    this.sendPost("/api/v1/users", {
      user: {
        email: email,
        fullname: name,
        password: password}
    }, (resp) => {
      this.login(email,password);
    });
  }

  setTaskTime(task_id, time) {
    this.sendPatch('/api/v1/tasks/'+task_id, {task: {time_spent: time}}, (resp) => {
      this.fetch_tasks();
      });
  }



}

export default new API();
