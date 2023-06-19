/* O conceito de callback é passar uma função como parâmetro para outra função
e depois ser chamada ded volta. */

const exec = (fn, a, b) => fn(a, b);

const somar = (x, y) => x + y;
const subtrair = (x, y) => x - y;

const resultado = exec(somar, 2, 3);
const resultado1 = exec(subtrair, 10, 5);

console.log(Array(resultado, resultado1));

// temporizador no callback (tempo que cada chamada será feita)

const cb = () => console.log("Executando...");
setInterval(cb, 1000); // função + o tempo em ms que cada função será chamda

/* outros modos que pode ser feito

setInterval(() => console.log("Executando..."), 1000);

ou;

setInterval(function () {
  console.log("Executando...");
}, 1000); */

