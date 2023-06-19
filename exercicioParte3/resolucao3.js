// somar(3)(4)(5)

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(somar(3)(4)(5));

/* const somarAB = somar(3)(4);
console.log(somarAB(5)); 

criando uma var para passar os 2 primeiros parâmetros */

// calcular(3)(7)(fn)

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

/* função responsalver por pegar o parâmetro x, depois y e por fim usar uma 
função para guardar x e y usar em outra função */

function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

r1 = calcular(3)(7)(adicao);
r2 = calcular(3)(7)(subtracao);
r3 = calcular(3)(7)(multiplicacao);

console.log(r1, r2, r3);