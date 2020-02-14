var alpha = 0.5;
var promedioesperado = 0.5;
var n = 10;
var z2 = 1.96
var num = [0.119921533911259, 0.287363085102028, 0.935988416450341, 0.448700190131132, 0.670215787289378,
    0.557930539793708, 0.275416003642435, 0.786009789326028, 0.822061201767223, 0.201024261504338];

console.log("Numeros registrados: " + num)

var sum = num.reduce((previous, current) => current += previous);
var prom = sum / num.length;

console.log("Promedio: " + prom)

var z = ((prom - promedioesperado) * Math.sqrt(n) / (Math.sqrt(1 / 12)))

console.log("z_0: " + z )

console.log("Zα/2:" + z2)


if (z > alpha) {

    console.log("No se rechaza H0")
}

else {
    console.log("Se rechaza H0")
}
