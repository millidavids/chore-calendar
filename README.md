# Chore Calendar

"I want a web application to control the flow of chore responsibilities from day to day."

## How to Run

Install the [Docker Toolbox](https://www.docker.com/docker-toolbox). In a terminal in this directory:

    eval $(docker-machine env default --shell=bash)
    docker-compose build
    docker-compose up
    cp dotenv.development .env

Alternatively, if you don't need the log stream:

    eval $(docker-machine env default --shell=bash)
    docker-compose build
    docker-compose start
    cp dotenv.development .env

Customize .env and set a default username and password for signing in.

Run migrations and seeds:

    docker-compose run --rm chore bin/rake db:migrate db:seed

Visit [192.168.99.100:3000](http://192.168.99.100:3000) (assuming that is your docker-machine ip).

Changing networks:

If you have changed networks since the last `docker-compose up` or `docker-compose start`:

    docker-machine restart default

Deployment:

app.json and Procfile files for Heroku deployment.
