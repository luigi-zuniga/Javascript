function entraEnFoco(elemento)
{
	elemento.className = "enFoco";
	
}

function salidaDeFoco(elemento)
{
	elemento.className = "fueraFoco";
}

/*
Funcion que comprueba si el campo en el cual 
estamos posicionados, se encuentra vacio. 
*/
function revisarObligatorio(elemento)
{
	//si el valor de elemento se encuentra vacio
	if(elemento.value=="")
	{
		//generamos la clase error desde 
		//input.erro de CSS
		elemento.className = "error";
	}else{
		//en caso contrario lo dejamos sin clase
		elemento.className = "";
	}
}