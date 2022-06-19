# intro

In this project, we will see how to create a Node JS docker



# create image


docker build --tag node-docker .

- or with namespace (can be pushed to dockerhub)

docker build --tag prawinn555/node-docker .


# run image


docker run --name node-docker1 -d -p 3000:3000 --rm prawinn555/node-docker

# stop

docker stop node-docker1
