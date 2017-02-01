package lab3.SI1.webserver;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Tarefa {

	@Id
	@GenericGenerator(name = "SequenceStyleGenerator",
			  strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator")
	@GeneratedValue(generator="SequenceStyleGenerator")
	private int id;
	private String nome;
	private boolean status;
	
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
}
