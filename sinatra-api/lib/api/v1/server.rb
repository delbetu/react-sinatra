require 'sinatra'
require_relative 'ping'

before do
  headers 'Access-Control-Allow-Origin' => 'http://localhost:8080'
end
