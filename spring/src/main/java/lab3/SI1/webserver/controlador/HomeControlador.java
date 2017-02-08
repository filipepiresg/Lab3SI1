package lab3.SI1.webserver.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeControlador {
	
	@RequestMapping("/")
	public String homeControlador(){
		return "index";
	}
	
	@RequestMapping("/contato")
	public String contatoControlador(){
		return "contato";
	}
}
