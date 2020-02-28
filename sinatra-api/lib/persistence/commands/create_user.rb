module Persistence
  module Commands
    class CreateUser < ROM::Commands::Create[:sql]
      register_as :create
      relation :users
      result :one
    end
  end
end
