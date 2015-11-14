# Chore Calendar

I want a web application to control the flow of chore responsibilities from day to day.

## How to Run

Install the [Docker Toolbox](https://www.docker.com/docker-toolbox). In a terminal in this directory:

    eval $(docker-machine env default --shell=bash)
    docker-compose build

Run migrations and seeds:
    docker-compose run --rm chore bin/rake db:migrate db:seed

Visit [192.168.99.100:3000](http://192.168.99.100:3000).
