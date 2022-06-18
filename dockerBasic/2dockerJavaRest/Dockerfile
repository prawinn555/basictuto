FROM openjdk:16-alpine3.13

WORKDIR /app

COPY test-app/mvnw ./
COPY test-app/pom.xml ./
COPY test-app/.mvn/ .mvn/

RUN ./mvnw dependency:go-offline

# this layer can change often, because src is modified.
COPY test-app/src/ src/

RUN echo "checking app files" ; ls -l ; ls -l .mvn

# ./mvnw spring-boot:run
CMD ["./mvnw", "spring-boot:run"]