const entrada 	= document.getElementById("entrada")
const saida	  	= document.getElementById("saida")
const criar	  	= document.getElementById("criar")
const classe	= document.getElementById("classe")

window.addEventListener('DOMContentLoaded', init)

function init(){
	criar.addEventListener('click', gerar)
	gerar()
}

function gerar(){
	if(classe.value != ""){
		let strClasse = classe.value.charAt(0).toUpperCase() + classe.value.substr(1);
		strSaida = 
		"class " + 
		strClasse +
		"{\n";

		if(entrada.value != ""){
			strSaida +=
			gerarEscopo() + 
			"\n" + 
			gerarCon() + 
			"\n" + 
			gerarMet()
		}

		strSaida += "\n}";

		saida.innerHTML = strSaida;
	}
	else{
		saida.innerHTML = "\\\\classe vazia";
	}
	
	autoGrow(saida)	
}

function gerarMet(){	
	let strSaida = "";
	let a = entrada.value.split(", ");	
	let visib = document.querySelector('input[name="visib-metodos"]:checked').value
	for(i=0; i<a.length; i++){
		newA = a[i].charAt(0).toUpperCase() + a[i].substr(1);
		strSaida += "	"+visib+" function get"+newA+"(){ \n		return $this->"+a[i]+"; \n	} \n";
		strSaida += "	"+visib+" function set"+newA+"($"+a[i]+"){ \n		$this->"+a[i]+" = $"+a[i]+"; \n	} \n";
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

		strBody += "		$this->"+a[i]+" = $"+a[i]+";\n";		
	}

	return "	public function __construct(" + strConHead +"){\n"+ strBody + "	}";	
}

function gerarEscopo(){	
	let a = entrada.value.split(", ");
	let strSaida = "";
	let visib = document.querySelector('input[name="visib-atributos"]:checked').value
	for(i=0; i<a.length; i++){				
		strSaida += "	"+visib+" $"+a[i]+"; \n";		
	}	
	return strSaida;
}

function autoGrow(element) {
	element.style.height = "5px";
	element.style.height = (element.scrollHeight)+"px";
}