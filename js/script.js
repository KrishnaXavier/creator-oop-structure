const entrada = document.getElementById("entrada")
const saida	  = document.getElementById("saida")
const criar	  = document.getElementById("criar")
const constru = document.getElementById("construturo")

window.addEventListener('DOMContentLoaded', init)

function init(){
	criar.addEventListener('click', gerar)
	gerar()
}

function gerar(){	
	saida.innerHTML = gerarMet()
	autoGrow(saida)
	constru.innerHTML = gerarCon()	
	autoGrow(constru)
}

function gerarMet(){
	console.log("gerarMet");
	let a = entrada.value.split(", ");
	let strSaida = "";
	let visib = document.querySelector('input[name="visibilidade"]:checked').value
	for(i=0; i<a.length; i++){
		newA = a[i].charAt(0).toUpperCase() + a[i].substr(1);						
		strSaida += visib+" function get"+newA+"(){ \n return $this->"+a[i]+"; \n} \n";
		strSaida += visib+" function set"+newA+"($"+a[i]+"){ \n  $this->"+a[i]+" = $"+a[i]+"; \n} \n";		
	}	
	return strSaida;	
}

function gerarCon(){	
	let strConHead = "";
	let strBody = "";
	let a = entrada.value.split(", ");
	for(i=0; i<a.length; i++){
		if(i+1 == a.length)
			strConHead += "$"+a[i];
		else				
			strConHead += "$"+a[i]+", ";

		strBody += "$this->"+a[i]+" = $"+a[i]+";\n";		
	}

	return "public function __construct(" + strConHead +"){\n"+ strBody + "}";	
}

function autoGrow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}