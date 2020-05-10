# Capstone Image Filtering Microservice

capatone is a simple cloud application developed as part of my  Udacity Cloud Engineering Nanodegree final project. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.



## Tasks

### Setup Docker Environment
You'll need to install docker https://docs.docker.com/install/. Open a new terminal within the project directory and run:

1. Build the images: `docker-compose -f docker-compose-build.yaml build --parallel`
2. Push the images: `docker-compose -f docker-compose-build.yaml push`
3. Run the container: `docker-compose up`

