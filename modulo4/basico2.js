// arrow function

const boaSemana = () => console.log("Tenha uma boa semana!");
boaSemana();

const saudacao = (nome) => "Olá " + nome + "!";
console.log(saudacao("Marcos"));

// quando se tem 1 único parâmetro pode excluir o uso das ()

const saudacao1 = nome => `Olá ${nome}, tudo bom??`;
console.log(saudacao1("Marcos"));

const somarTudo = numeros => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};

/* função que tenha corpor e queira retornar algo, mesmo que seja usando
arow function nececssita do uso do return! */

console.log(somarTudo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ou usando (...) operador rest

const somarTudo1 = (...numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};
console.log(somarTudo1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // n necessira ser array []

// função dentro de função

const potenciacao1 = base => exp => base ** exp
console.log(potenciacao1(2)(3));

const somar = (a, b) => a + b;
console.log(somar(2, 3));