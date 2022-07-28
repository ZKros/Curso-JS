// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix // MileSegundos
console.log(data.toString());

const data2 = new Date(2019, 3, 20, 15, 14, 27); // Ano, Mês, Dia, Horas, Minutos e Segundos
console.log(data2.toString());

const data3 = new Date('2019-04-20 20:20:59'); // Data passada por String
console.log(data3.toString());

const data4 = new Date(); // Data Atual
console.log('Dia', data4.getDate()); // Dia
console.log('Mês', data4.getMonth() + 1); // Mês começa do Zero
console.log('Ano', data4.getFullYear()); // Ano
console.log('Horas', data4.getHours()); // Horas
console.log('Minutos', data4.getMinutes()); // Minutos
console.log('Segundos', data4.getSeconds()); // Segundos
console.log('Milisegundos', data4.getMilliseconds()); // Milisegundos
console.log('Dia da Semana', data4.getDay()); // Dia da Semana 0 - Domingo e 6 - Sábado
console.log(data4.toString());


function zeroAEsquerda (num){
	return num >= 10 ? num : `0${num}`;
}

function formataData(data5) {
	const dia = zeroAEsquerda(data5.getDate());
	const mes = zeroAEsquerda(data5.getMonth() + 1);
	const ano = zeroAEsquerda(data5.getFullYear());
	const hora = zeroAEsquerda(data5.getHours());
	const min = zeroAEsquerda(data5.getMinutes());
	const seg = zeroAEsquerda(data5.getSeconds());

	return `Hoje é ${dia}/${mes}/${ano} e são ${hora}:${min}:${seg}`;
}

const data5 = new Date();
const dataBrasil = formataData(data5);
console.log(dataBrasil);