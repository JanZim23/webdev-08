# TaskTracker

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).


Pages:

/ or /Home
- Main Page:
  - Logged-in users will see a list of tasks that they are assigned to.
  - Non Logged in users are redirected to login page.
/login
- Login Page
  - Email & Password form.
  - Register Button
/Register
- Registration Page
  - Fullname
  - Email
  - password & confirm
/tasks
- List of All Tasks
  - Unassigned /newest first
  - Assigned /newest first
/task
- A Task
  - Edit Task opt
  - Complete
  - Increment/Dec Time Spent
/users
- List of all users
