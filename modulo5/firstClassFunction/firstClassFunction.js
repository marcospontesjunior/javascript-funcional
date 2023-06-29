/* Diz-se que uma linguagem de programação possui funções
de primeira classe quando funções nessa linguagem são
tratadas  */

const x = 3;
const y = function (txt) {
  return `Exemplo: ${txt}`;
};

console.log(x);
console.log(y("Olá"));