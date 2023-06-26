#!/bin/zsh

docker-compose run backend bundle exec \
 rails g model Team \
 name:string \
 captain_first_name:string \
 captain_last_name:string

docker-compose run backend bundle exec \
 rails db:migrate

# app/models/team.rb
#  validates :name, presence: true
#  validates :captain_first_name, presente: true
#  validates :captain_last_name, presente: true

# Gemfile
#  gem 'faker'

docker-compose run backend bundle exec \
 bundle install

docker-compose run backend bundle exec \
 rails db:seed