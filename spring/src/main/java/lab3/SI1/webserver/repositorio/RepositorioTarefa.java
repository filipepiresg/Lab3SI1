package lab3.SI1.webserver.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lab3.SI1.webserver.Tarefa;

@Repository
public interface RepositorioTarefa extends JpaRepository<Tarefa, Integer>{

}
