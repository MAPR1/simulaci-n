
window.onload = function () {
	var tabla = document.getElementById("tabla");
	document.getElementById("generar").onclick = function () {
		var tlength = tabla.rows.length;
		if (tlength > 1) {
			for (var i = tlength - 1; i >= 1; i--) {
				tabla.deleteRow(i);
			}
		}

		var res = parseInt(document.getElementById("semilla").value);
		var mult = parseInt(document.getElementById("multiplicador").value);
		var mod = parseInt(document.getElementById("modulo").value);

		var tbody = document.createElement("tbody");
		var tfoot = document.createElement("tfoot");
		var sw = true;

		var celda;
		var txtcelda;
		var hilera;

		var c = 1;
		var v = res;
		var x = 0;
		while (sw) {
			hilera = document.createElement("tr");
			x = (parseInt(res * mult) % mod);
			if(mult%2){
				alert('truena');
				return false;
			}
			if(mod>res && mod>mult){
				alert('tambientruena');
				return false;
			}
			if(res==mult){
				alert('tambientruena');
				return false;
			}


			celda = document.createElement("td");
			txtcelda = document.createTextNode(c);
			celda.appendChild(txtcelda);
			hilera.appendChild(celda);
			celda = document.createElement("td");
			txtcelda = document.createTextNode(res);
			celda.appendChild(txtcelda);
			hilera.appendChild(celda);
			celda = document.createElement("td");
			txtcelda = document.createTextNode(x);
			celda.appendChild(txtcelda);
			hilera.appendChild(celda);
			res = x;
			console.log(c);
			if (v == x) {
				sw = false;
			}
			c++;
			tbody.appendChild(hilera);
		}
		hilera = document.createElement("tr");
		hilera.className = "danger";
		celda = document.createElement("td");
		txtcelda = document.createTextNode("Número repetido");
		celda.appendChild(txtcelda);
		hilera.appendChild(celda);
		celda = document.createElement("td");
		txtcelda = document.createTextNode(res);
		celda.appendChild(txtcelda);
		hilera.appendChild(celda);
		tfoot.appendChild(hilera);
		tabla.appendChild(tbody);
		tabla.appendChild(tfoot);
	}
}