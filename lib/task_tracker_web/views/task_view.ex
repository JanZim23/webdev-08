defmodule TaskTrackerWeb.TaskView do
  use TaskTrackerWeb, :view
  alias TaskTrackerWeb.TaskView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do

    assigned_to = TaskTrackerWeb.UserView.render_or_nil(task.assignee)

    %{id: task.id,
      name: task.name,
      description: task.description,
      complete: task.complete,
      time_spent: task.time_spent,
      owner: TaskTrackerWeb.UserView.render("show.json",%{user: task.owned_by}),
      assigned_to: assigned_to}
  end
end
