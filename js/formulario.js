function entraEnFoco(elemento)
{
	elemento.className = "enFoco";
	
}

function salidaDeFoco(elemento)
{
	elemento.className = "fueraFoco";
}

function revisarNumerico(elemento)
{
	//Revisamos si el elemento no se encuentra vacio
	if(elemento.value!="")
	{
		var dato = elemento.value;
		if(isNaN(dato))
		{
			//isNaN comprueba si el valor es is Not A Number
			//si el dato no es un numero generamos un error
			elemento.className = "error";
			alert("Haz ingresado un valor erroneo");

		}else{
			elemento.className = "";
		}
	}
}

function revisarLongitud(elemento, minimo)
{
	//Revisamos que el campo no este vacio
	if(elemento.value!="")
	{
		var dato = elemento.value;
		if(dato.length < minimo)
		{
			elemento.className = "error";
		}else{
			elemento.className="";
		}
	}
}


function revisarEmail(elemento)
{
	//revision mediante expresiones regulares
	if(elemento.value!="")
	{
		var dato = elemento.value;
		//las expresiones regulares comienzan con / y terminan con /
		//Lo que realmente nos interesa saber de la expresion es que es un OBJETO
		//y como tal tiene un metodo llamado test() donde le damos un dato 
		//el cual nos devuelve si esta correcto o no, si cumple o no con la condicion.
		var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		
		if(!expresion.test(dato))
		{	
			//si la condicion no cumple con expresion regular añadimos la clase erro 
			elemento.className = "error";
		}else{
			//si cumple la condicion, no llamamos a la clase de error por lo cual estaria OK!
			className = "";
		}
	}
}

