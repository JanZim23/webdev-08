defmodule TaskTrackerWeb.LoginController do
  use TaskTrackerWeb, :controller

  action_fallback TaskTrackerWeb.FallbackController

  alias TaskTracker.Users.User


  def login(conn, %{"email" => email, "password" => password}) do
    with %User{} = user <- TaskTracker.Users.authenticate_user(email, password) do
      tk = Phoenix.Token.sign(TaskTrackerWeb.Endpoint, "user_id", user.id)
      data = %{
        token: tk,
        user_id: user.id,
        email: user.email,
        fullname: user.fullname,
      }

      conn
      |> fetch_session
      |> put_session(:session, data)
      |> put_resp_header("content-type", "application/json; charset=UTF-8")
      |> send_resp(:created, Jason.encode!(%{data: data}))
    else
      _ -> conn
      |> put_resp_header("content-type", "application/json; charset=UTF-8")
      |> send_resp(401, Jason.encode!(%{"error" => "Invalid Username / Password"}))
    end
  end

  def logout(conn, _params) do
    conn
    |> fetch_session
    |> put_session(:session, nil)
    |> send_resp(200, Jason.encode!(%{data: "success"}))
  end

end
