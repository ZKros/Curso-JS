const numero = Math.floor(Math.random() * 11);

if (numero >= 0 || numero <= 4){
	console.log("Seu número está entre 0-4")
} else if (numero >= 5 || numero <= 8){
	console.log("Seu número está entre 5-8");
} else {
	console.log("Seu número é maior que 9")
}