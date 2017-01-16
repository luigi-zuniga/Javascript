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
			alert("Haz ingresado un valor no numerico");

		}else{
			elemento.className = "";
		}
	}
}