/* Quando a linguagem permite que uma função opere outra função,
   uma função como argumento para outra função ou retornar uma 
   função dentro de outra função. */

function run(fn) {
  fn();
}

function sayHello() {
  console.log("Olá");
}

run(sayHello);

run(function () {
  console.log("Olá");
});

function newRun(fn) {
  return `Resultado: ${fn()}`;
}

const resultado = newRun(Math.random);
console.log(resultado);

// técnica curring (uma função retornando outra como parâmetro)

function precoFinal(imposto) {
  return function (preco) {
    return preco * (1 + imposto);
  }
}

console.log(precoFinal(0.0875)(25.1));

// um modo mais facil

const precoFinal2 = precoFinal(0.0875);

console.log(precoFinal2(25.1));