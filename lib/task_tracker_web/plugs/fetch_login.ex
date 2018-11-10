defmodule TaskTrackerWeb.Plugs.FetchLogin do
  import Plug.Conn

  def init(args), do: args

  def call(conn, _args) do
    session = get_session(conn, :session)
    if session == nil do
      assign(conn, :session, nil)
    else
      assign(conn, :session, session)
    end
  end
end
