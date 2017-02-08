var TODOList = angular.module("TODOList", []);
TODOList.controller("listaCtrl", ['$scope', '$http', function($scope, $http) {
	$scope.novaTarefa = {};
	
	function carregarTarefas(){
		$http({
			method:'GET', 
			url:'http://localhost:8080/tarefas'
		}).then(function sucessCallback(response){
			$scope.tarefasConcluidas=[];
			$scope.tarefasNaoConcluidas=[];
			angular.forEach(response.data, function(tarefa) {
				if(tarefa.status == false){
					$scope.tarefasNaoConcluidas.push(tarefa);
				} else if(tarefa.status == true){
					$scope.tarefasConcluidas.push(tarefa);
				}
			});

		}, function unsucessCallback(responde){
			console.log(response.data);
			console.log(response.status);
		});
	}
	carregarTarefas();
	$scope.addTarefa = function(){
		$http({
			method:'POST', 
			url:'http://localhost:8080/tarefas',
			data:$scope.novaTarefa
		}).then(function sucessCallback(response){
			if(response.status == 204){
				alert("Digite um nome para sua tarefa!");
			} else {
				carregarTarefas();
				$scope.novaTarefa = null;
			}
		}, function unsucessCallback(responde){
			console.log(response.data);
			console.log(response.status);
		});
	}
	$scope.rmvTarefaNConc = function(tarefa){
		$http({
			method:'DELETE', 
			url:'http://localhost:8080/tarefas/'+tarefa.id
		}).then(function sucessCallback(response){
			carregarTarefas();
		}, function unsucessCallback(responde){
			console.log(response.data);
			console.log(response.status);
		});
	}
	$scope.rmvTarefaConc = function(tarefa){
		$http({
			method:'DELETE', 
			url:'http://localhost:8080/tarefas/'+tarefa.id
		}).then(function sucessCallback(response){
			carregarTarefas();
		}, function unsucessCallback(responde){
			console.log(response.data);
			console.log(response.status);
		});
	}
	$scope.mvTarefaConc = function(tarefa){
		$http({
			method:'PUT', 
			url:'http://localhost:8080/tarefas/'+tarefa.id
		}).then(function sucessCallback(response){
			carregarTarefas();
		}, function unsucessCallback(responde){
			console.log(response.status);
		});
	}
	$scope.mvTarefaNConc = function(tarefa){
		$http({
			method:'PUT', 
			url:'http://localhost:8080/tarefas/'+tarefa.id
		}).then(function sucessCallback(response){
			carregarTarefas();
		}, function unsucessCallback(responde){
			console.log(response.status);
		});
	}
	$scope.zerarListas = function () {
		for (var i = $scope.tarefasConcluidas.length - 1; i >= 0; i--) {
			$scope.rmvTarefaConc($scope.tarefasConcluidas[i]);
		}
		for (var i = $scope.tarefasNaoConcluidas.length - 1; i >= 0; i--) {
			$scope.rmvTarefaNConc($scope.tarefasNaoConcluidas[i]);
		}
	}
}]);


function mudarCor() {
	var cor = document.getElementById('cabecalho');
	var cores = ["#DC143C", "#4682B4", "#FA8072", "#7FFFD4", "#00FF7F","#4B0082", "#696969"];
	cor.style.backgroundColor = cores[Math.floor(Math.random()*cores.length)];
	var cor2 = document.getElementById("corpo");
	cor2.style.backgroundColor = cores[Math.floor(Math.random()*cores.length)];
}

function mudarFonte(){
	var fonte = document.getElementById('corpo');
	var fontes = ["Trebuchet MS","Arial", "Verdana", "Tahoma", "Sans-serif", "Times New Roman", "Georgia"];
	fonte.style.fontFamily = fontes[Math.floor(Math.random()*fontes.length)];
}

function novaPagina(){
	pagina = document.getElementById('pagina');
	if(pagina.value == 1){
		window.open("contato.html");
	} else {
		window.open("/");
	}
	pagina = null;
}
