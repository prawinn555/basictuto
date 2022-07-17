package fr.prawinn555.kafka;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;

@ApplicationScoped
public class KafkaProducerService {

	@Inject
	KafkaService confService;
	
    Producer<String, String> producer;


	public Producer<String, String> getProducer() {
		initService();
		return producer;
	}


	public void initService()  {
		if(producer!=null) return;
		producer = new KafkaProducer<String, String>(confService.getConfig());
	}
	
	
}
