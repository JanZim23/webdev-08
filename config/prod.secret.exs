use Mix.Config

# In this file, we keep production configuration that
# you'll likely want to automate and keep away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or yourself later on).
config :task_tracker, TaskTrackerWeb.Endpoint,
  secret_key_base: "af/OixFnDBFhD5//5rNKbp2Q+Xm7HCfURgEejooSJ6Ipn5yKuKIdbgMXv0trpxSF"

# Configure your database
config :task_tracker, TaskTracker.Repo,
  username: "tasktracker8",
  password: "postgres",
  database: "task_tracker_prod",
  pool_size: 15
