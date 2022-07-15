package fr.prawinn555.demo;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

import java.util.UUID;

import org.junit.jupiter.api.Test;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class FindMovieTest {

    @Test
    public void testHelloEndpoint() {
        given()
                .when().get("/service/hello")
                .then()
                .statusCode(200)
                .body(is("hello"));
    }



}
