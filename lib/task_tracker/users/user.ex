defmodule TaskTracker.Users.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :admin, :boolean, default: false
    field :email, :string
    field :fullname, :string
    field :password_hash, :string

    has_many :owned_tasks, TaskTracker.Tasks.Task #, forgeign_key: :owner
    has_many :assigned_tasks, TaskTracker.Tasks.Task #, forgeign_key: :asigned_to


    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :fullname, :password_hash, :admin])
    |> unique_constraint(:email)
    |> validate_required([:email, :fullname, :password_hash, :admin])
  end
end
