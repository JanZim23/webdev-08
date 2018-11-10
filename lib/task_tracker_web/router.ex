defmodule TaskTrackerWeb.Router do
  use TaskTrackerWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug TaskTrackerWeb.Plugs.FetchLogin
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", TaskTrackerWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/home", PageController, :index
    get "/login", PageController, :index
    get "/register", PageController, :index
    get "/tasks", PageController, :index
    get "/task/*p", PageController, :index
    get "/users", PageController, :index
    get "/createtask", PageController, :index


  end

  scope "/api/v1", TaskTrackerWeb do
    pipe_through :api

    resources "/users", UserController
    resources "/tasks", TaskController
    post "/login", LoginController, :login
    post "/logout", LoginController, :logout

  end

  # Other scopes may use custom stacks.
  # scope "/api", TaskTrackerWeb do
  #   pipe_through :api
  # end
end
