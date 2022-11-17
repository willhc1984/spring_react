package br.com.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.model.ProdutoModel;
import br.com.api.service.ProdutoService;

@RestController
@RequestMapping(value = "/produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	@GetMapping
	public ResponseEntity<List<ProdutoModel>> listarTodos() {
		return ResponseEntity.status(HttpStatus.OK).body(produtoService.listarTodos());
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<?> listar(@PathVariable Long id){
		Optional<ProdutoModel> produtoOptional = produtoService.buscar(id);
		if(!produtoOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado! ID: " + id);
		}
		return ResponseEntity.status(HttpStatus.OK).body(produtoOptional.get());
	}
	
	@PostMapping
	public ResponseEntity<?> salvar(@RequestBody ProdutoModel produtoModel){
		return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.salvar(produtoModel));
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<?> atualizar(@RequestBody ProdutoModel produtoModel, @PathVariable Long id){
		Optional<ProdutoModel> produtoOptional = produtoService.buscar(id);
		if(!produtoOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado! ID: " + id);
		}
		produtoModel.setId(id);
		return ResponseEntity.ok().body(produtoService.atualizar(produtoModel));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> deletar(@PathVariable Long id){
		Optional<ProdutoModel> produtoOptional = produtoService.buscar(id);
		if(!produtoOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado! ID: " + id);
		}
		produtoService.deletar(produtoOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body("Produto deletado!");
	}

}
