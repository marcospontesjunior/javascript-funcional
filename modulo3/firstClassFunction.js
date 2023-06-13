/* Em uma linguaguem de programação tem First-class function quando
são tratadas suas funções como qualquer outro variável */

const soma = function (a, b) {
  return a + b;
}

const subtracao = function (a, b) {
    return a - b;
}

const multiplicacao = (x, y) => x * y

const divisao = (x, y) => x / y

console.log(soma(20, 30));
console.log(subtracao(30, 20));
console.log(multiplicacao(5, 10));
console.log(divisao(100, 10));