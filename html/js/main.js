angular.module("TODOList", []);
angular.module("TODOList").controller("listaCtrl", function ($scope) {
	$scope.tarefasConcluidas = ["Acordar"];
	$scope.tarefasNaoConcluidas = ["Estudar", "Dormir"];

	$scope.rmvTarefaConc = function (index) {
		$scope.tarefasConcluidas.splice(index, 1);
	}
	$scope.rmvTarefaNConc = function (index) {
		$scope.tarefasNaoConcluidas.splice(index, 1);
	}
	$scope.mvTarefaConc = function(index){
		var tarefa = $scope.tarefasConcluidas[index];
		$scope.rmvTarefaConc(index);
		$scope.tarefasNaoConcluidas.push(tarefa);
	}
	$scope.mvTarefaNConc = function(index){
		var tarefa = $scope.tarefasNaoConcluidas[index];
		$scope.rmvTarefaNConc(index);
		$scope.tarefasConcluidas.push(tarefa);
	}
	$scope.addTarefa = function() {
	 	var tarefa = $scope.novaTarefa;
	 	if(tarefa == null){
	 		alert("Digite um nome para sua tarefa!");
	 	} else {
	 		$scope.tarefasNaoConcluidas.push(tarefa);
			$scope.novaTarefa = null;
		}
	 }
	 $scope.zerarListas = function () {
	 	for (var i = $scope.tarefasConcluidas.length - 1; i >= 0; i--) {
	 		$scope.rmvTarefaConc(0);
	 	}
	 	for (var i = $scope.tarefasNaoConcluidas.length - 1; i >= 0; i--) {
	 		$scope.rmvTarefaNConc(0);
	 	}
	 }
});

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
