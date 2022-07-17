package fr.prawinn555.kafka;

import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import io.vertx.core.Vertx;

@ApplicationScoped
public class KafkaConsumerService {

	@Inject
	Vertx vertx;

	@Inject
	KafkaService confService;

	Consumer<String, String> consumer;

	List<String> messages = new ArrayList<String>();

	private boolean loading;
	private boolean pollingLoop;
	private long lastAccess;
	int pollingcounter;

	public synchronized void loadMessage() {
		loading = true;
		try {
			double diff = (System.currentTimeMillis()-lastAccess) /(1000*60d) ;
//				System.out.println("Polling No "+pollingcounter +", "
//						+diff +" mins since last user activity " +new Date(lastAccess) );
			
			pollingcounter++;
			ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(200));
			for (ConsumerRecord<String, String> record : records) {
				String key = record.key();
				String value = record.value();
				String line = String.format("Consumed record with key %s and value %s - received %s", key, value, new Date());
				messages.add(line);
				System.out.println("Consumer received " + line);
			}
		} finally {
			loading = false;
		}
	}

	public synchronized List<String> consumeMessages() {
		start();
		List<String> res = new ArrayList<String>();
		while (!messages.isEmpty()) {
			res.add(messages.remove(0));
		}
		return res;
	}

	
	public synchronized void start() {
		lastAccess = System.currentTimeMillis();
		pollingcounter = 0;
		if(null==consumer) {
			consumer = new KafkaConsumer<String, String>(confService.getConfig());
			consumer.subscribe(Arrays.asList(confService.getTopic()));
			System.out.println("subscribed to " + confService.getTopic());
		}
		if(!pollingLoop)  {
		  pollingLoop = true;
		  waitLoop();
		}
	}
	
	private void waitLoop() {
		if(!loading) {
			vertx.<String>executeBlocking(promise -> {
				// This code will be executed in a worker thread
				loadMessage();
				promise.complete("ok");
			}, res -> {
				if("ok".equals(res.result())) {
					// stop in x minute inactivity.
					double diff = (System.currentTimeMillis()-lastAccess) /(1000*60d) ;
					if(diff < 1) {
						waitLoop();
					} else {
						System.out.println("paused comsumer after "
								+diff
								+" mins");
						pollingLoop = false;
					}
				} else {
					System.out.println("ERR "+ res);
				}
			});
		} else {
			System.out.println("consumer is running");
		}
	}
}
