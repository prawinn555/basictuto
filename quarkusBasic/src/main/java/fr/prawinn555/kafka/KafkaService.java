package fr.prawinn555.kafka;

import java.io.IOException;
import java.util.Collections;
import java.util.Optional;
import java.util.Properties;
import java.util.concurrent.ExecutionException;

import javax.enterprise.context.ApplicationScoped;

import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.NewTopic;
import org.apache.kafka.common.errors.TopicExistsException;
import org.eclipse.microprofile.config.ConfigProvider;

@ApplicationScoped
public class KafkaService {
	
	int incrementCounter =  0;

	Properties config;
	
	public KafkaService() throws IOException {
		initService();
	}

	public Properties getConfig()  {
		return config;
	}

	private void initService()  {
		try {
			config = new Properties();
			ConfigProvider.getConfig().getConfigSources().forEach(
					src -> 
			 config.putAll(src.getProperties()));
		    createTopic(getTopic(), config);
		    System.out.println("config loaded");
		} catch(Exception e) {
			e.printStackTrace(); 
		}
	}

	public int incrementCounter() {
		return incrementCounter++;
	}
	public String getTopic()  {
		return getConfig().getProperty("myapp.kafka.topic");
	}

	// Create topic in Confluent Cloud
	public void createTopic(final String topic, final Properties cloudConfig) {
		final NewTopic newTopic = new NewTopic(topic, Optional.empty(), Optional.empty());
		try (final AdminClient adminClient = AdminClient.create(cloudConfig)) {
			adminClient.createTopics(Collections.singletonList(newTopic)).all().get();
		} catch (final InterruptedException | ExecutionException e) {
			// Ignore if TopicExistsException, which may be valid if topic exists
			if (!(e.getCause() instanceof TopicExistsException)) {
				throw new RuntimeException(e);
			}
		}
	}
}
