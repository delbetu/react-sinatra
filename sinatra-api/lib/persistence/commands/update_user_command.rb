module Persistence
  module Commands
    class UpdateUserCommand < ROM::SQL::Commands::Create
      relation :users
      register_as :update_user_command

      def execute(tuple); end
    end
  end
end

