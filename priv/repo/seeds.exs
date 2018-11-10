# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TaskTracker.Repo.insert!(%TaskTracker.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias TaskTracker.Repo

phash = Argon2.hash_pwd_salt("12345")


Repo.insert!(%TaskTracker.Users.User{email: "janzim23@gmail.com", admin: true, password_hash: phash, fullname: "Jan Zimmermann"})

Repo.insert!(%TaskTracker.Users.User{email: "jan@cantella.com", admin: false, password_hash: phash, fullname: "Jan Cantella"})
Repo.insert!(%TaskTracker.Users.User{email: "test@gmail.com", admin: false, password_hash: phash, fullname: "Test User"})


Repo.insert!(%TaskTracker.Tasks.Task{name: "Test Task 1", description: "This is a Test Task, its the first one!", owner: 1})
Repo.insert!(%TaskTracker.Tasks.Task{name: "Test Task 2", description: "This is a another Test Task, its the second one!", owner: 1, time_spent: 100})
Repo.insert!(%TaskTracker.Tasks.Task{name: "Test Task 3", description: "Another!", owner: 1, complete: true})
Repo.insert!(%TaskTracker.Tasks.Task{name: "Test Task 4", description: "We are going for a lot of tasks!", owner: 1, assigned_to: 3, complete: true})
Repo.insert!(%TaskTracker.Tasks.Task{name: "Test Task 5", description: "Wow I should use this more.", owner: 1, assigned_to: 2})
