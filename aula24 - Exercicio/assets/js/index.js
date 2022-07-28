const dateCurrent = new Date();
const dayWeek = dateCurrent.getDay();
const day = dateCurrent.getDate();
const month = dateCurrent.getMonth() + 1;
const fullYear = dateCurrent.getFullYear();
const hour = dateCurrent.getHours();
const minute = dateCurrent.getMinutes();

function formatWeek(dayWeek) {
	let dayWeekFormat;

	switch (dayWeek) {
		case 0:
			dayWeekFormat = 'Domingo';
			break;
		case 1:
			dayWeekFormat = 'Segunda-feira';
			break;
		case 2:
			dayWeekFormat = 'Terça-feira';
			break;
		case 3:
			dayWeekFormat = 'Quarta-feira';
			break;
		case 4:
			dayWeekFormat = 'Quinta-feira';
			break;
		case 5:
			dayWeekFormat = 'Sexta-feira';
			break;
		case 6:
			dayWeekFormat = 'Sábado-feira';
			break;
		default:
			dayWeekFormat = 'Dia da semana não existe';
	}
	return dayWeekFormat;
}

function formtMonth(month) {
	let monthFormat;

	switch (month) {
		case 0:
			monthFormat = 'Janeiro';
			break;
		case 1:
			monthFormat = 'Fevereiro';
			break;
		case 2:
			monthFormat = 'Março';
			break;
		case 3:
			monthFormat = 'Abril';
			break;
		case 4:
			monthFormat = 'Maio';
			break;
		case 5:
			monthFormat = 'Junho';
			break;
		case 6:
			monthFormat = 'Julho';
			break;
		case 7:
			monthFormat = 'Agosto';
			break;
		case 8:
			monthFormat = 'Setembro';
			break;
		case 9:
			monthFormat = 'Outubro';
			break;
		case 10:
			monthFormat = 'Novembro';
			break;
		case 11:
			monthFormat = 'Dezembro';
			break;
		default:
			monthFormat = 'Mês não encontrado'
	}
	return monthFormat
}

const dayWeekFormat = formatWeek(dayWeek);
const monthFormat = formtMonth(month);

function zeroLeft(num) {
	return num >= 1 ? num : `0${num}`;
}

function showMessage() {
	const container = document.querySelector('#container h1');
	container.innerHTML = `${dayWeekFormat}, ${day} de ${monthFormat} de ${fullYear} as ${zeroLeft(hour)}:${zeroLeft(minute)}`
}

showMessage();
