const numero = Number(prompt("Digite seu número "));
const numeroTitulo = document.getElementById("numero-titulo");
const raiz = document.getElementById("raizQuadrada");
const inteiro = document.getElementById("inteiro");
const pNumero = document.getElementById("numero");
const semNum = document.getElementById("semNumero");
const arreCima = document.getElementById("cima");
const arreBaixo = document.getElementById("baixo");
const casaDecimal = document.getElementById("decimal");

numeroTitulo.innerHTML = numero;
raiz.innerHTML = numero ** 0.5;
pNumero.innerHTML = numero;
inteiro.innerHTML = Number.isInteger(numero);
semNum.innerHTML = Number.isNaN(numero);
arreBaixo.innerHTML = Math.floor(numero);
arreCima.innerHTML = Math.ceil(numero);
casaDecimal.innerHTML = numero.toFixed(2);
