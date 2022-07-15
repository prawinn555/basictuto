package fr.prawinn555.demo;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/service")
public class FindMovieResource {

    @Inject
    FindMovieService service;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/listMovies")
    public List<Movie> listMovie() {
        return service.list();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/findMovies/{keyWord}")
    public List<Movie> findMovie(String keyWord) {
        return service.find(keyWord);
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/hello")
    public String hello() {
        return "hello";
    }
}