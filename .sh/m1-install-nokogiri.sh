#!/bin/zsh

brew install libxml2 libxslt

cd ../backend

bundle lock --add-platform x86_64-linux
bundle install

gem install nokogiri --platform=ruby -- --use-system-libraries

cd ../.sh
