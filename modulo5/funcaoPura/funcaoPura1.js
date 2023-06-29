/* Uma função pura é uma função em que o valor de retorno 
é determinado APENAS por seus valores de entrada, sem
efeitos colaterais observáveis. */

const pi = 3.14;

// função impura pois o pi é um valor externo!
function areaCirculo(raio) {
  return pi * raio ** 2;
}

console.log(areaCirculo(10));

// transformando em pura:

const areaCirculoPura = (raio, pi) => pi * raio ** 2;

console.log(areaCirculo(10, 3.14));
console.log(areaCirculo(10, 3.141592));
console.log(areaCirculo(10, Math.PI));

// priorizar o máximo a pureza da função!