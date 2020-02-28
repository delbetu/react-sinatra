module Persistence
  module Relations
    class Users < ROM::Relation[:sql]
      schema(infer: true)
    end
  end
end
