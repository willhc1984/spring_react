package br.com.api;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.api.model.ProdutoModel;
import br.com.api.repository.ProdutoRepository;

@SpringBootApplication
public class ApiSpringReactApplication implements CommandLineRunner{
	
	@Autowired
	private ProdutoRepository produtoRepository;

	public static void main(String[] args) {
		SpringApplication.run(ApiSpringReactApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		ProdutoModel p1 = new ProdutoModel(1L, "TV", "LG");
		ProdutoModel p2 = new ProdutoModel(2L, "Computador", "IBM");
		ProdutoModel p3 = new ProdutoModel(3L, "Celular", "Samsung");
		ProdutoModel p4 = new ProdutoModel(4L, "Microondas", "LG");
		ProdutoModel p5 = new ProdutoModel(5L,"Notebook", "Acer");
		produtoRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5));		
	}

}
