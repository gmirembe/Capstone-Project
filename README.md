# Capstone Image Filtering Microservice

Capstone is a simple cloud application developed as part of my  Udacity Cloud Engineering Nanodegree final project. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.



## Tasks

### Setup Docker Environment
You'll need to install docker https://docs.docker.com/install/. Open a new terminal within the project directory and run:

1. Build the images: `docker-compose -f docker-compose-build.yaml build --parallel`
2. Push the images: `docker-compose -f docker-compose-build.yaml push`
3. Run the container: `docker-compose up`

# You can also run run the Services and then deploy the Yamls as well 

### To Create Services 
kubectl apply -f backend-feed-service.yaml
kubectl apply -f backend-user-service.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f reverseproxy-service.yaml


####  Deploy the pods to kubernetes cluster 

kubectl apply -f backend-feed-deployment.yaml 
kubectl apply -f backend-user-deployment.yaml 
kubectl apply -f frontend-deployment.yaml 
kubectl apply -f reverseproxy-deployment.yaml