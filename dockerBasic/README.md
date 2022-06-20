# Intro


In this directory, we can find examples of how to use dockers

- docker node js
- docker Java / spring boot / maven
- how to use volumes mappings to keep persistent data 


# docker basic commands 

See the following.

# before exécution

sudo bash

(admin)


# build

Go to the directory containing Dockerfile

## example

docker build --tag node-docker .

- in this example, 'node-docker' is the image name, not image tag.
- Docker will use “latest” as its default tag

# views local images

## example

 docker images

# tag an image

## example

docker tag node-docker:latest node-docker:v1.0.0
 
 
- syntaxe docker tag <original-name:tag> <target-name:tag>


# Run an image

## example 1

docker run --name node-docker1 -d -p 3000:3000 --rm node-docker

- Option --detach or -d for short (no terminal attached for background service).
- Option -p or --publish   (host-port:container-port)
- Option --rm Automatically remove the container when it exits


## example 2 : with interactive bash

docker run --name test -it debian

- Option '-it' instructs docker to open a bash shell.
- used for a non web service image.


# see running docker

docker ps


# inspect / start/ stop / rm / logs

docker <action>  <container-name>


see https://docs.docker.com/engine/reference/commandline/docker/

# publish

docker login

- by default, dockerhub reportories is used.
- enter user name/ password


- create a repository

docker push prawinn555/<repository-name>:<tag-name>

- Example

- rename tag if necessary.
docker tag  <local-image1>:<tag1>  prawinn555/demo-docker:latest

docker push prawinn555/demo-docker:latest



# Volumes & mount

 docker volume create my-vol
 
- List volumes:

 docker volume ls
 
 docker volume inspect my-vol

- Volume mapping 2 options : --mount or -v.
Only option "-v" is show here.
The --mount option is similaire (see the docker reference).

- 2 ways : A and B.

## A bind mounts : Mapping host's directory to container's directory


- Example

docker run -d \
  --name file-server1 --rm -p 8080:80 \
  -v "$(pwd)"/public_files:/usr/share/nginx/html \
  nginx:latest
  
- mapping the directory <currentDir>/public_files to the container's directory

- The $(pwd) sub-command expands to the current working directory on Linux or macOS hosts. 
  
## B Volumes : Mapping volumes to container's directory

- Example

docker run -d \
  --name devtest \
  -v myvol2:/app \
  nginx:latest
  
  
- The syntax is similar between A et B.

- A :  -v <host-dir>:<container-dir>
- B :  -v <volume-name>:<container-dir>


##  VOLUMN in docker files

VOLUMN dir1 dir2 ...

This instructs the docker manager to create a volume with random name if it is not explicitly mapped in the "docker run" command.




  


