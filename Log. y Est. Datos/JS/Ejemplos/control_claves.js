/* funciones externas */

function validarClaves() {
	var usuario = document.getElementById("usu").value;
	var clave = document.getElementById("cla").value;
	var i=0, c=0, min=0, may=0, dig=0;
	
	if (usuario.length < 6 || usuario.length > 10 ) {
		alert("el usuario deben tener entre 6 y 10 caracteres ...");
		return false;
	}
	
	if (clave.length < 8) {
		alert("la clave debe tener exactamente 8 caracteres ...");
		return false;
	}
	
	for (i=0; i<clave.length ; i++) {
		if ( !(clave.charAt(i) >= 'A' && clave.charAt(i) <= 'Z') &&
			 !(clave.charAt(i) >= 'a' && clave.charAt(i) <= 'z') &&
			 !(clave.charAt(i) >= 0 && clave.charAt(i) <= 9) ) 
			 { alert("la clave debe contener solo letras o digitos ..."); 
			   return false; }	   
	} 
	
	
	for (i=0 ; i<clave.length ; i++) {
		if (clave.charAt(i) >= 'A' && clave.charAt(i) <= 'Z') min++;
		if (clave.charAt(i) >= 'A' && clave.charAt(i) <= 'Z') may++;
		if (clave.charAt(i) >= 'A' && clave.charAt(i) <= 'Z') dig++;
	}
	
	
	if (min>0 && may>0 && dig>0) {
		alert("REGISTRO EXITOSO!!!"); 
		return true;}
	else {alert("la clave debe contener al menos una letra minuscula, una letra mayuscula y un digito ..."); 
		  return false;}
	
}


function recargar() {
	location.href=location.href;
}