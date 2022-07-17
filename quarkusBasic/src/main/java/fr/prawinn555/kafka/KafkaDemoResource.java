package fr.prawinn555.kafka;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutionException;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;


@Path("/kafkaservice")
public class KafkaDemoResource {

	@Inject
	KafkaProducerService producerService;

	@Inject
	KafkaConsumerService consumerService;

	@Inject
	KafkaService confService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/consume")
	public String consume() {
		List<String> messages = consumerService.consumeMessages();
		return  messages.size() + " message(s) \n" 
					+String.join( "\n", messages)
					+"\n\n access time " +new Date();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/produce/{message}")
	public String produce(String message) throws InterruptedException, ExecutionException, IOException {
		consumerService.start(); // prepare consumer
		String key = "myMessageKey" + confService.incrementCounter();
		String msg = message + " sent at " + new Date();
		java.util.concurrent.Future<RecordMetadata> future = producerService.getProducer()
				.send(new ProducerRecord<String, String>(confService.getTopic(),
						key, msg));
		System.out.println("producing  message " +key +" " +msg);
		RecordMetadata res = future.get();
		System.out.println("producing  message - done " + res +  " ");
		return key+" : "+ msg + " to topic " + res.topic() 
			+"\n "+ res.toString();
	}

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	@Path("/hello")
	public String hello() {
		return "hello from Kafka service";
	}
}