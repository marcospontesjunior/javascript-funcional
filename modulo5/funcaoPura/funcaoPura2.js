/* Uma função pura é uma função em que o valor de retorno 
é determinado APENAS por seus valores de entrada, sem
efeitos colaterais observáveis. */

// função impura pois depende de um fator de aleatóriedade
function gerarNumAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumAleatorio(5, 10000));
console.log(gerarNumAleatorio(5, 10000));
console.log(gerarNumAleatorio(5, 10000));
console.log(gerarNumAleatorio(5, 10000));
console.log(gerarNumAleatorio(5, 10000));