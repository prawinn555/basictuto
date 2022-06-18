FROM openjdk:8u131-jdk-alpine
WORKDIR /src
ENTRYPOINT javac Hello.java && java Hello

# this docker file will compare the Hello file and execute.
# to test
# docker build -t my-openjdk .
# docker run -v $(pwd)/src:/src my-openjdk