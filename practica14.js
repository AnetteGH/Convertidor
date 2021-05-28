function limpiarformulario(){
	document.getElementById("practica").reset();
}

var menor= function(n1, n2, n3){
	var n1= parseInt(document.getElementById("numero1").value);
	var n2= parseInt(document.getElementById("numero2").value);
	var n3= parseInt(document.getElementById("numero3").value);

	if (n1<n2 && n1<n3){
		menor=n1;
	}
		else{
		if (n2<n3){
		menor=n2;
	}
	else{
		menor=n3;
	}
	}
	return menor;
}

var Pul= function(c){
	var c= parseFloat(document.getElementById("Centimetros").value);
	var p= c/2.54;
	return p;
}

var Yard= function(m){
	var m= parseFloat(document.getElementById("Metros").value);
	var y= m*1.094;
	return y;
}