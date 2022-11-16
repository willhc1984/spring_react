package br.com.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.model.ProdutoModel;
import br.com.api.service.ProdutoService;

@RestController
@RequestMapping(value = "/produtos")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	@GetMapping
	public ResponseEntity<List<ProdutoModel>> listarTodos() {
		return ResponseEntity.status(HttpStatus.OK).body(produtoService.listarTodos());
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<ProdutoModel> listar(@PathVariable Long id){
		Optional<ProdutoModel> produtoOptional = produtoService.buscar(id);
		return ResponseEntity.status(HttpStatus.OK).body(produtoOptional.get());
	}

}
