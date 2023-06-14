const estudantes = [
  { nome: "Pedro", nota: 6.4 },
  { nome: "Lucas", nota: 8.6 },
  { nome: "Roberta", nota: 9.4 },
  { nome: "Fábio", nota: 9.1 },
];

const bomEstudante = (estudante) => estudante.nota >= 9;
const notasEstudantes = (elemento) => elemento.nota;
const media = (acumulador, elemento, i, array) => {
  if (i === array.length - 1) {
    return (acumulador + elemento) / array.length;
  } else {
    return acumulador + elemento;
  }
};

console.log(
  "A média das notas acima de 9 é de " +
    estudantes.filter(bomEstudante).map(notasEstudantes).reduce(media)
);

const estudantesAbaixo = (estudante) => estudante.nota < 9;

console.log(
  "A média das notas abaixa de 9 é de " +
    estudantes.filter(estudantesAbaixo).map(notasEstudantes).reduce(media)
);