/*
	*** Modelo de código JavaScript AJAX para busca de palavras
	*** Desenvolvido por Fábio de Almeida Martins
*/

//verifica se o browser tem suporte a AJAX
var request = null;

try { // navegadores Firefox, Opera, Safari, Chrome, MS Edge e MS IE7+
	request = new XMLHttpRequest();
//	alert("Iniciando XMLHttpRequest.");
} catch (tryIE) { // navegadores Internet Explorer antigos
//	alert("Iniciando ActiveXObject.");
	try {
		request = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (otherIE) { // navegadores Internet Explorer antigos
		try {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (falha) { // falha na inicialização
			request = null;
//			alert("Falha ao iniciar request.");
		}
	}
}

if (request) {
	function exibeSugestao(str) {
		if (str.length == 0) {
//			alert("Atualizando 01");
			document.getElementById("sugestao").innerHTML = "";
			return;
		} else {
//			alert("Atualizando 02");
			request.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById("sugestao").innerHTML = this.responseText;
				}
			};
			var url = "gethint.php?q=" + str;
			request.open("PUSH", url, true);
			request.send(null);
		}
	}
} else {
	alert("Esse browser não possui suporte para o uso de AJAX.");
}