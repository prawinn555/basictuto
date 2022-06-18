# create image


docker build --tag java-docker .

- or with namespace (can be pushed to dockerhub)

docker build --tag prawinn555/java-docker .


# run image


docker run --name java-docker1 -d -p 8080:8080 --rm prawinn555/java-docker

# stop

docker stop java-docker1