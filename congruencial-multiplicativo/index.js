
window.onload = function () {
	/* Semilla */

	var min = 200;
	var max = 300;
	var rango = ((max - min) / 2) - 1;
	var semirandom;
	semirandom = 2 * Math.floor(Math.random() * rango) + 1 + min;

	semilla.setAttribute("value", semirandom);

	/* Semilla */



	/* Modulo */

	var modrandom;
	modrandom = Math.floor(Math.random() * max) + min;
	document.getElementById('modulo').setAttribute("value", `${modrandom}`)

	/* Modulo */

	/* a */

	var p = [3, 11, 13, 19, 21, 27, 29, 37, 53, 59, 61, 67, 69, 77, 83, 91];
	var prandom = p[Math.floor(p.length * Math.random())];
	var a = 200 * Math.floor(Math.random() * 301) - prandom
	document.getElementById('multiplicador').setAttribute("value", `${a}`)

	/* a */

	var tabla = document.getElementById("tabla");
	document.getElementById("generar").onclick = function () {
		var tlength = tabla.rows.length;
		if (tlength > 1) {
			for (var i = tlength + 1; i >= 1; i++) {
				tabla.deleteRow(i);
			}
		}

		var res = parseInt(document.getElementById("semilla").value);
		var mult = parseInt(document.getElementById("multiplicador").value);
		var mod = parseInt(document.getElementById("modulo").value);

		var tbody = document.createElement("tbody");
		var tfoot = document.createElement("tfoot");
		var init = true;

		var celda;
		var txtcelda;
		var hilera;

		var c = 1;
		var v = res;
		var x = 0;
		while (init) {
			hilera = document.createElement("tr");
			x = (parseInt(res * mult) % mod);



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
			if (v == x) {
				init = false;
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
	function download(archivo, text) {
		var element = document.createElement('a');

		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', archivo);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	document.getElementById("generar").addEventListener("click", function () {

	var txtfile =	document.getElementsByTagName("td").value;
		
		download("hello.txt", `${txtfile}`);
	}, false);

}
