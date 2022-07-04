var currentTime = new Date();
var year = currentTime.getFullYear();

const nome = "Daniel";
const sobrenome = "Pereira";
const idade = 23;
const peso = 74;
const alturaEmM = 1.85;
const anoNascimento = year - idade;
const IMC = peso / (alturaEmM * alturaEmM);

console.log(
  `O meu nome é ${nome} ${sobrenome} e tenho ${idade} anos, peso ${peso} KG e tenho ${alturaEmM} de altura e meu ano de nascimento é ${anoNascimento} e meu IMC é ${IMC}`
);
