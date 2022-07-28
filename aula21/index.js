// Operador ternário - (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usúario VIP' : 'Usuário normal';

console.log(nivelUsuario);

//If normal
if (pontuacaoUsuario >= 1000) {
	console.log('Usuário VIP');
} else {
	console.log('Usuário Normal');
}

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);