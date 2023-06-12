// function expression

const incremento1 = function (n) {
  return n + 1;
};

// function arrow (sempre é uma função anônima)

const incremento2 = (n) => {
  return n + 1;
};

// ou

const incremento3 = n => {
  return n + 1;
};

// ou

/* função arrow quando não ter corpo ({}) essa função terá apenas uma linha de código
   e tudo que estiver na linha de código será retornado automaticamente (return explícito) */

const incremento4 = n => n + 1;

// quando a função tem mais de um parâmetro necessita o uso de () 

const incremento5 = (a, b) => a + b;

console.log(incremento1(4));
console.log(incremento2(9));
console.log(incremento3(14));
console.log(incremento4(199));
console.log(incremento5(5, 30));