package springdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;

@SpringBootApplication
@RestController
public class SpringBootDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDemoApplication.class, args);
	}

	@GetMapping("/hello1")
	public String hello_world_1(){
		return "Hello World from Spring Boot";
	}

	@GetMapping("/hello2")
	public String hello_world_2(@RequestParam (name="name",required = false, defaultValue =  "noname") String name){
		return "Hello World "+name;
	}

	@GetMapping(path = "/json1", produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<String, String> json1(){
		return Collections.singletonMap("response", "Hello World");
	}
}
