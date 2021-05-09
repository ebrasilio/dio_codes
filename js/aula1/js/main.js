/*
 * Testando comentários grandes 
 */

// comentários pequenos

/*
var name = "Bebendo Todas";
var hora = 9;
var d = new Date();
alert( "JS " + name + " desde as " + hora + " da manhã!" + "\n date= " + d );
alert( "Testado funçoes: \n .getDate: "  + d.getDate() +  
"\n .getDay: " + d.getDay() + 
"\n .getTime: " + d.getTime() + 
"\n .getMonth: " + d.getMonth() + 
"\n .getFullYear: " + d.getFullYear() + 
"\n .getHours: " + d.getHours()+
"\n .getMinutes: " + d.getMinutes()+
"\n .getSeconds: " + d.getSeconds()+ 
"\n .getMilliseg: "+ d.getMilliseconds() +
"\n .getTimezoneOffset "+ d.getTimezoneOffset() +
"\n .getUTCDate: "+ d.getUTCDate() + 
"\n .getUTCDay: "+ d.getUTCDay() 
);

function validaIdade(idade){
	var validar;   // Variavel local no escopo da função
	if(idade >= 18){
		validar = true
	} else{
		validar = false	
	}	
	return validar;
}

var idade = prompt("Entre com a idade: ");
var result = validaIdade(idade); // varivel criada no escopo da main para receber o resultado 
alert("Maior de idade? " + "\t" + result);


// UTILIZANDO VARIAVEL GÇ
validar = 0; // variavel global
function validaIdade2(idade){
	if(idade >= 18){
		validar = true;	
	} else {
		validar = false;
	}
	return validar;
}

validaIdade2(idade);
alert(validar);
*/

function action(){
	//alert("Obrigada por clicar");
	document.getElementById("tks").innerHTML="<h1><em>Obrigada por Clicar</h1></em>";
  //console.log(document.getElementById("tks"));
}

function redirecionar(){
	window.open("https://devcenter.heroku.com/articles/getting-started-with-php#define-config-vars");
  //window.location.href = "https://test.mosquitto.org/"; //abre na mesma janela
}

function trocar(elemento){
	elemento.innerHTML = "Novo texto";
	//document.getElementById("mouse").innerHTML = "Novo texto";
	//alert("trocar texto");
}

function voltar(elemento){
	elemento.innerHTML = "Aqui";
	//document.getElementById("mouse").innerHTML = "Aqui";
	//alert("trocar texto");
}

function load(){
	alert("Página Carregada");
}

function Change(elemento){ // só cria a caixinha quando troca o valor
	alert(elemento.value);
}