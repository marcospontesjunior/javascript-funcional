/* Funções que operam em outras funções, tornando-as
como argumentos ou retornando-as, são chamadas de 
higher-order function. */

function executar(fn, ...params) {
  return fn(...params);
}

function somar(a, b, c) {
  return a + b + c;
}

function multiplicar(a, b) {
  return a * b;
}

const r1 = executar(somar, 4, 5, 6);
const r2 = executar(multiplicar, 30, 40);

console.log(r1, r2);

function executar1(fn, ...params) {
  return function (textoInicial) {
    return `${textoInicial} ${fn(...params)}!`;
  };
}

function somar1(a, b, c) {
  return a + b + c;
}

function multiplicar1(a, b) {
  return a * b;
}

const r3 = executar1(somar1, 4, 5, 6)("O resultado da soma é");
const r4 = executar1(multiplicar1, 30, 40)("O resultado da multiplicação é");

console.log(r3);
console.log(r4);