//const pessoa1 = {
//  nome: "Daniel",
//  sobrenome: "Pereira",
//  idade: 23,
//};
//const pessoa2 = {
//  nome: "Zeca",
//  sobrenome: "Miranda",
//  idade: 25,
//};
//console.log(pessoa1, pessoa2);

//function criaPessoa(nome, sobrenome, idade) {
//  return {
//    nome,
//    sobrenome,
//    idade,
//  };
//}
//const pessoa3 = criaPessoa("Samuel", "Neto", 27);
//const pessoa4 = criaPessoa("Zero", "Hermes", 22);
//const pessoa5 = criaPessoa("Ernesto", "Neto", 28);
//console.log(pessoa3, pessoa4, pessoa5);

const pessoa1 = {
  nome: "Daniel",
  sobrenome: "Pereira",
  idade: 23,

  fala() {
    console.log(
      `${this.nome} ${this.sobrenome} está falando que tem ${this.idade} anos!`
    );
  },
};

pessoa1.fala();
