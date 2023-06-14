/* No filtro pode ter o mesmo tamanho do array original,
   nunca maior! Pode ter um array vazio ou um array intermediário
   com qualquer quantidade de elementos entre o tamanho original e o vazio. */

const numero = [1, 2, 3, 4, 5, 6];

const maiorQueZero = (elemento) => elemento > 0;
const maiorQueDez = (elemento) => elemento > 10;
const numerosPares = (elemento) => elemento % 2 === 0;

console.log(numero.filter(maiorQueZero));
console.log(numero.filter(maiorQueDez));
console.log(numero.filter(numerosPares));

const estudantes = [
  { nome: "Pedro", nota: 6.4 },
  { nome: "Lucas", nota: 8.6 },
  { nome: "Roberta", nota: 9.4 },
  { nome: "Fábio", nota: 9.1 },
];

const bomEstudante = (estudante) => estudante.nota >= 9;

console.log(estudantes.filter(bomEstudante));