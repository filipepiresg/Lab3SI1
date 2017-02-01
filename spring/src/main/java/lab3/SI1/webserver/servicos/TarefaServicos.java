package lab3.SI1.webserver.servicos;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lab3.SI1.webserver.Tarefa;
import lab3.SI1.webserver.repositorio.RepositorioTarefa;

@Service
public class TarefaServicos {
	@Autowired
	RepositorioTarefa repositorioTarefa;

	public Collection<Tarefa> buscarTodos(){
		return repositorioTarefa.findAll();
	}

	public Tarefa salvarTarefa(Tarefa tarefa) {
		return repositorioTarefa.save(tarefa);
	}

	public void removerTarefa(Tarefa tarefa){
		repositorioTarefa.delete(tarefa);

	}

	public Tarefa buscarId(int id){
		return repositorioTarefa.findOne(id);
	}

}
