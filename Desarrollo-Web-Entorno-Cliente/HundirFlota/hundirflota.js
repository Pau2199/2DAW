/* La función cargaTablero devuelve una matriz de 10x10 con los siguientes barcos
		5 x 1 portaaviones
		4 x 1 destructor
		3 x 2 submarino
		2 x 3 fragata
	Los barcos se representan por unos contiguos en la matriz ya sea de manera horizontal como vertical.
	Donde no hay barco se representa por ceros (agua).
	Alrededor de un barco solo puede haber agua o el borde del tablero.
*/
function cargaTablero() {
	var hundirFlota = new Array(3);
	
	hundirFlota[0] = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 0, 0]];


	hundirFlota[1] = [[0, 0, 1, 1, 0, 1, 0, 0, 0, 0] , [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


	hundirFlota[2] = [[0, 0, 0, 1, 1, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 1, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]];
	
	var elegido = Math.floor((Math.random()*3) + 1);
	
	return hundirFlota[elegido];
}

/* La función mostrarTablero recibe un tablero en forma de array multidimensional (matriz)
	y lo muestra por consola.
*/
function mostrarTablero(tablero) {
	console.log('El tablero es:');
	tablero.forEach(function(element) {
 		console.log(element);
	});
}