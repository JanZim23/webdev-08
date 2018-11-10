defmodule TaskTrackerWeb.UserView do
  use TaskTrackerWeb, :view
  alias TaskTrackerWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render_or_nil(user) do
    if user == nil do
      nil
    else
      TaskTrackerWeb.UserView.render("show.json",%{user: user})
    end
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      email: user.email,
      fullname: user.fullname,
      admin: user.admin}
  end
end
