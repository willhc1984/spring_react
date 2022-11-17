package br.com.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.model.ProdutoModel;
import br.com.api.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public List<ProdutoModel> listarTodos(){
		return produtoRepository.findAll();
	}

	public Optional<ProdutoModel> buscar(Long id) {
		return produtoRepository.findById(id);
	}
	
	public ProdutoModel salvar(ProdutoModel produtoModel) {
		return produtoRepository.save(produtoModel);
	}
	
	public ProdutoModel atualizar(ProdutoModel produtoModel) {
		return produtoRepository.save(produtoModel);
	}
	
	public void deletar(ProdutoModel produtoModel) {
		produtoRepository.delete(produtoModel);
	}


}
