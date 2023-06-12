function logParams(a, b, c) {
  console.log(a, b, c);
}

logParams(1, 2, 3, 4, 5); // o javascript ignora os parâmetros que não fazem parte
logParams(1, 2); // o javascript coloca o parâmetro que faltar como undefined

// parâmetro padrão

function defaultParams(a = 1, b = 2, c = 3) {
  console.log(a, b, c);
}

defaultParams(5, 4);
defaultParams();

function logNums(nums) {
  for (let n of nums) {
    console.log(n);
  }
}

logNums([1, 2, 3, 4, 5]); // array

// operado spread/rest (...) antes do parâmetro

function logNums(...nums) {
  console.log(nums);
}

logNums(1, 2, 3, 4, 5);

function somaTodos(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(somaTodos(1, 2, 3));