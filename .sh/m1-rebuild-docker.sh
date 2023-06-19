#!/bin/zsh

docker-compose down

docker rmi team-snap-mega-tournament-backend

chmod +x ./m1-update-rb-version.sh
chmod +x ./m1-install-nokogiri.sh

./m1-update-rb-version.sh
./m1-install-nokogiri.sh

docker-compose build

docker-compose run frontend yarn
docker-compose run backend bundle exec rake db:create

docker-compose up -d

open http://localhost:80

cd ..