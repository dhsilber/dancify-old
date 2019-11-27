package name.davidsilber.dancify.desktop;

import org.springframework.boot.CommandLineRunner;
// import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

import javafx.application.Application;

@SpringBootApplication
public class DancifyDesktopApplication {

	public static void main(String[] args) {
		// SpringApplication.run(DancifyDesktopApplication.class, args);

        Application.launch(JavaFxApplication.class, args);
	}

	// This bit swiped from https://spring.io/guides/spring-boot/ just to make sure
	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext applicationContext) {
		return args -> {

			System.out.println("Let's inspect the beans provided by Spring Boot:");

			String[] beanNames = applicationContext.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for (String beanName : beanNames) {
				System.out.println(beanName);
			}

		};
	}
}
