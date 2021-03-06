package br.com.larissafalcao.myinvest.resource;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.larissafalcao.myinvest.domain.Investimento;
import br.com.larissafalcao.myinvest.repository.InvestimentoRepository;

@RestController
@RequestMapping ("/investimentos")
@CrossOrigin (origins = "http://localhost:3000")
public class InvestimentoResource {
	
	@Autowired
	private InvestimentoRepository investimentoRepository;
	
	///////////////////////////////////////////////////
	
	//metodo listar
	@GetMapping
	public List<Investimento> listarTodos() {
		return investimentoRepository.findAll();
	}
	
	//metodo de busca
	@GetMapping ("/{codigo}")   
	public Investimento buscarPeloCodigo(@PathVariable Long codigo) {
		return investimentoRepository.findById(codigo).orElse(null);
	}
	
	//metodo de deletar
	@DeleteMapping
	public void remover(@PathVariable Long codigo) {
		investimentoRepository.deleteById(codigo);
	}
	
	//metodo de salvar
	@PostMapping
	public Investimento cadastrar(@RequestBody Investimento investimento) {
		return investimentoRepository.save(investimento);
		
	}
}