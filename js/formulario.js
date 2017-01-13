function entraEnFoco(elemento)
{
	elemento.className = "enFoco";
	/*
	  parentNode 
	  hace referencia al elemento padre que lo contiene
	  en este caso input es contenido por li	
	*/
	var elementoLista = elemento.parentNode;
	/*Si ejecutamos el siguiente ejemplo veremos que 
	  todos los elementos que este entre li y /li se convierten 
	  automaticamente en parrafos que damos por innerHTML
	  esto ocurre por el hecho de estar igualando el elemento lista
	  por la etiqueta p con el mensaje.

	  elementoLista.innerHTML = "<p>Ayuda!</p>";

	  lo que debemos hacer para visualizar el parrafo es lo siguiente
	*/
	var mensajeAlerta = document.getElementById("mensajeAlerta");
	if(mensajeAlerta!=undefined)
	{
	/*
		si mensajeAlerta!=definido nos dara true
		en tal caso remueve el id

		!= operador de igualdad y desigualdad, nos permiten comprobar 
		si los valores de operando son iguales o no, independientemente
		del tipo que sean dichos operandos.
		el valor obtenido es true cuando la igualdad o desigualdad 
		se cumple y false en caso contrario

		undefined operacion no inicializada	
		removeChild elimina un nodo y todos sus descendientes, 
		donde el nodo padre es el nodo que queremos eliminar

		Lo que hacemos basicamente es eliminar un elemento teniendo 
		si ya esta definido, es decir si al llamar a la funcion 
	*/

		mensajeAlerta.parentNode.removeChild(mensajeAlerta);
	}

		elementoLista.innerHTML += "<p class='mensajeAlerta' id='mensajeAlerta'>Complete este campo!</p>";
	
}

function salidaDeFoco(elemento)
{
	elemento.className = "fueraFoco";
}