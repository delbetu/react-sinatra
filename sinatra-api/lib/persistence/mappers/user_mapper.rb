require 'rom/transformer'

module Persistence
  module Mappers
    class UserMapper < ROM::Transformer
      relation :users
      register_as :user_mapper

      map_array do; end
    end
  end
end
