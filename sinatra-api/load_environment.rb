ENV['RACK_ENV'] ||= 'development'
APP_ROOT = File.expand_path('../', __FILE__)
ENV['BUNDLE_GEMFILE'] ||= File.join(APP_ROOT, '/', 'Gemfile')
require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'].to_sym)

# Load all files under lib
Dir["#{APP_ROOT}/lib/**/*.rb"].each {|file| require file }


require 'yaml'

require 'pry'

db_config = YAML::load_file("#{APP_ROOT}/config/database.yml.erb")[ENV.fetch('RACK_ENV', 'development')]
db_username = ERB.new(db_config['username']).result
db_password = ERB.new(db_config['password']).result
db_host = ERB.new(db_config['host']).result
db_name = ERB.new(db_config['database']).result

MAIN_CONTAINER = ROM.container(
  :sql,
  "postgres://#{db_username}:#{db_password}@#{db_host}/#{db_name}",
  extensions: [:pg_json]
) do |config|
  config.auto_registration("#{APP_ROOT}/lib/")
end
