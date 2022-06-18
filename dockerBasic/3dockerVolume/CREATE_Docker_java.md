# intro

- Application is based on a file server nginx.
- It will serve all files in the public_files directory of the host machine.



# run image

docker run -d \
  --name file-server1 --rm -p 8080:80 \
  -v "$(pwd)"/public_files:/usr/share/nginx/html \
  nginx:latest
  
GO TO 
http://localhost:8080/


# stop

docker stop file-server1