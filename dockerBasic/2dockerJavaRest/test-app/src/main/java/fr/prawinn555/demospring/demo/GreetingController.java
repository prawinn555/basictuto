package fr.prawinn555.demospring.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
	private int n=1;

	public GreetingController() {
		System.out.println("GreetingController : go to http://localhost:8080/greeting");
	}
	@GetMapping("/greeting")
	public ResponseEntity<String> greeting() {
		String trace = "greeting number " + (n++);
		System.out.println(trace);
		return ResponseEntity.ok("Hello !!! " +trace) ;
	}
	
	@GetMapping("/")
	public ResponseEntity<String> root() {
		return ResponseEntity.ok("Try http://localhost:8080/greeting") ;
	}
}