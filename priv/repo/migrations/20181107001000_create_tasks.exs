defmodule TaskTracker.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :name, :string
      add :description, :string
      add :complete, :boolean, default: false, null: false
      add :owner, references(:users, on_delete: :delete_all)
      add :assigned_to, references(:users, on_delete: :delete_all), default: nil, null: true
      add :time_spent, :integer, default: 0
      timestamps()
    end

    create index(:tasks, [:owner])
    create index(:tasks, [:assigned_to])
  end
end
