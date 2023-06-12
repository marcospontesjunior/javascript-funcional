// anonymous function (função sem nome)

(function (a, b, c) {
  return a + b + c;
});

// function expression

const soma = function (a, b) {
  return a + b;
};

console.log(soma(5, 10)); // ou

const resultado = soma(5, 10);
console.log(resultado);

let x = "string";
console.log(x);

x = soma;
console.log(x(5, 10));