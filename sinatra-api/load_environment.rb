ENV['RACK_ENV'] ||= 'development'
APP_ROOT = File.expand_path('../', __FILE__)
ENV['BUNDLE_GEMFILE'] ||= File.join(APP_ROOT, '/', 'Gemfile')
require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'].to_sym)

# Load all files under lib
Dir["#{APP_ROOT}/lib/**/*.rb"].each {|file| require file }

MAIN_CONTAINER = ROM.container(
  :sql,
  'postgres://app_user_development:@localhost/app_db_development',
  extensions: [:pg_json]
) do |config|
  config.auto_registration("#{APP_ROOT}/lib/")
end
