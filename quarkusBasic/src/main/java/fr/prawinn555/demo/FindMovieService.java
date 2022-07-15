package fr.prawinn555.demo;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.model.Filters;

@ApplicationScoped
public class FindMovieService {
	
	private static int MAX = 10;

    @Inject
    MongoClient mongoClient;

    public List<Movie> list() {
        List<Movie> list = new ArrayList<>();
        MongoCursor<Document> cursor = getCollection().find().iterator();

        try {
            while (cursor.hasNext() && list.size()< 10 ) {
                Document document = cursor.next();
                Movie Movie = mapToMovie(document);
                list.add(Movie);
            }
        } finally {
            cursor.close();
        }
        return list;
    }
    
	public List<Movie> find(String keyWord) {
        List<Movie> list = new ArrayList<>();
        System.out.println("find movies with key word : "+keyWord);
        Bson filter = Filters.regex("title", "(?i).*" + keyWord + ".*");
        MongoCursor<Document> cursor = getCollection().find(filter).iterator();

        try {
            while (cursor.hasNext() && list.size()< 10 ) {
                Document document = cursor.next();
                Movie Movie = mapToMovie(document);
                list.add(Movie);
            }
        } finally {
            cursor.close();
        }
        return list;
	}

	private Movie mapToMovie(Document document) {
		Movie Movie = new Movie();
		Movie.setTitle(document.getString("title"));
		Movie.setPlot(document.getString("plot"));
		return Movie;
	}
    
    private MongoCollection<Document> getCollection() {
        return mongoClient.getDatabase("sample_mflix").getCollection("movies");
    }


}
