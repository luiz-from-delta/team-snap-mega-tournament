FROM ruby:3.0.0

RUN apt-get update -qq \
 && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /myapp/backend

COPY Gemfile* ./

RUN bundle install

COPY . /myapp/backend

EXPOSE 3000
