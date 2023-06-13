/* função map é a função responsável por transformar
   os elementos de um array */

const numero = [1, 2, 3, 4, 5, 6];

/* const numero2 = numero.map(function (elemento) {
    return elemento * 2
}); */

const numero2 = numero.map((elemento) => elemento * 2);

console.log(numero, "o seu dobro é:", numero2);

// uma ourta forma de fazer é:

const numero3 = [];
for (let n of numero) {
  numero3.push(n * 2);
}

console.log(numero, "o seu dobro é:", numero3);

const estudantes = [
  { nome: "Pedro", nota: 6.4 },
  { nome: "Lucas", nota: 8.6 },
  { nome: "Roberta", nota: 9.4 },
  { nome: "Fábio", nota: 9.1 },
];

const nomeEstudante = (elemento) => elemento.nome;
const notaEstudante = (elemento) => elemento.nota;

const resultadoNotas = estudantes.map(notaEstudante).map(Math.ceil);

console.log(estudantes.map(nomeEstudante), resultadoNotas);
