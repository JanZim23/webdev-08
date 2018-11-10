defmodule TaskTracker.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :complete, :boolean, default: false
    field :description, :string
    field :name, :string
    field :time_spent, :integer

    belongs_to :owned_by, TaskTracker.Users.User, foreign_key: :owner
    belongs_to :assignee, TaskTracker.Users.User, foreign_key: :assigned_to


    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:name, :description, :complete, :assigned_to, :owner, :time_spent])
    |> validate_required([:name, :description, :owner])
  end
end
