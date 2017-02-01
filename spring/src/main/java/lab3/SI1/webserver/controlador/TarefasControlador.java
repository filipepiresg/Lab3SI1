package lab3.SI1.webserver.controlador;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lab3.SI1.webserver.Tarefa;
import lab3.SI1.webserver.servicos.TarefaServicos;


@RestController
public class TarefasControlador {

	@Autowired
	private TarefaServicos tarefas;

	@RequestMapping(method=RequestMethod.GET, value="/tarefas",
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Tarefa>> buscarTodos(){
		Collection<Tarefa> listaTarefas = tarefas.buscarTodos();

		return new ResponseEntity<Collection<Tarefa>>(listaTarefas, HttpStatus.OK);
	}

	@RequestMapping(method=RequestMethod.POST, value="/tarefas",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Tarefa> adicionarTarefa(@RequestBody Tarefa tarefa){
		if(tarefa.getNome() == null || tarefa.getNome() == ""){
			return new ResponseEntity<Tarefa>(HttpStatus.NO_CONTENT);
		}
		
		Tarefa tarefaAdicionada = tarefas.salvarTarefa(tarefa); 
		return new ResponseEntity<Tarefa>(tarefaAdicionada, HttpStatus.CREATED);
	}

	@RequestMapping(method=RequestMethod.DELETE, value="/tarefas/{id}")
	public ResponseEntity<Tarefa> removerTarefa(@PathVariable Integer id){

		Tarefa tarefaExcluida = tarefas.buscarId(id);
		if(tarefaExcluida == null){
			return new ResponseEntity<Tarefa>(HttpStatus.NOT_FOUND);
		}
		tarefas.removerTarefa(tarefaExcluida);
		return new ResponseEntity<Tarefa>(tarefaExcluida, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/tarefas/{id}")
	public ResponseEntity<Tarefa> mudarStatus(@PathVariable Integer id){
		
		Tarefa tarefaAlterada = tarefas.buscarId(id);
		if(tarefaAlterada == null){
			return new ResponseEntity<Tarefa>(HttpStatus.NOT_FOUND);
		}
		
		tarefaAlterada.setStatus(!tarefaAlterada.isStatus());
		tarefas.salvarTarefa(tarefaAlterada);
		return new ResponseEntity<Tarefa>(HttpStatus.OK);
	}
	
	
}
