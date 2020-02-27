require 'sinatra'

get '/ping' do
  headers 'Access-Control-Allow-Origin' => 'http://localhost:8080'
  content_type :json
  { value: 'pong!' }.to_json
end
