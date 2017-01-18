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
		//Si elemento(devuelto por this) cumple la condicion
		//entregamos su valor a la variable implicita dato
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


//Lo que hacemos en la funcion validar es volver a validar cada uno de los campos
function validar()
{
	//generamos una variable booleana (logica)
	var estaTodoOK = true; 

	/*El objetivo de esta variable es preguntar campo por campo 
	  si esta todo bien y si es asi el formulario se envia
	  al entrar a las condiciones y alguna de las condiciones no se cumple
	  nuestra variable estadoOk cambia a false y el envio del formulario se detiene.
	*/
	if(document.getElementById("nombre").value.length < 2)
	{
		estaTodoOK = false;
		alert("Nombre Minimo 2 letras");
	}
	if(document.getElementById("direccion").value.length < 8)
	{
		estaTodoOK = false;
		alert("Direccion Minimo 8 letras");
	}
	if(document.getElementById("edad").value!="" && (isNaN(document.getElementById("edad").value)))
	{
		estaTodoOK = false;
		alert("Edad vacia o no numerica");
	}
	
	//La siguiente expresion regular no permite correos tales como
	//caracteres latinos, falla con las siguientes expresiones
	/*
		germán@bla.com
		yo@mi-compañía.com
		estação@brasil.com.br
	*/
	/*
		
	function validarEmail(valor) {
  		if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
   			alert("La dirección de email " + valor + " es correcta!.");
  		}else{
   			alert("La dirección de email es incorrecta!.");
  		}
	}
	

	validarEmail("jorgésys.boc+al@hotflow.com");
	
	*/
	var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	if(expresion.test(document.getElementById("email")))
	{
		estaTodoOK = false;
		alert("Email mal ingresado");
	}
	//con esta condicion solicitamos al usuario deba seleccionar un opcion
	if(document.getElementById("estadoCivil").value == "")
	{
		estaTodoOK = false;
		alert("Estado Civil no seleccionado");
	}
	//con ! comprobamos si NO esta checkeado
	if(!document.getElementById("aceptoCondiciones").checked)
	{
		estaTodoOK = false;
		alert("Acepte los termino de condiciones");
	}

	//una vez finalizada la comprobacion devolvemos la expresion
	//dependiendo si cumple o no sera true o false
	return estaTodoOK;
}

