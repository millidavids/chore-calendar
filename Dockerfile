FROM ruby:2.2.0
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
RUN mkdir /chore-calendar
ENV RAILS_ENV=development \
    BUNDLE_PATH=/bundle \
    BUNDLE_JOBS=2
WORKDIR /chore-calendar
ADD . /chore-calendar
EXPOSE 80
