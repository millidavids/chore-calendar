FROM ruby:2.2.0
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
RUN mkdir /chore-calendar
WORKDIR /chore-calendar
ADD Gemfile /chore-calendar/Gemfile
ADD Gemfile.lock /chore-calendar/Gemfile
ENV BUNDLE_GEMFILE=/chore-calendar/Gemfile \
  BUNDLE_JOBS=2 \
  BUNDLE_PATH=/bundle
RUN bundle install
ADD . /chore-calendar
EXPOSE 80
