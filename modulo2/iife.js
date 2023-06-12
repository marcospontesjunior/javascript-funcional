// IIFE (Immediately Invoked Function Expression)

(function (a, b, c) {
  console.log(`Resultado: ${a + b + c}`);
})(1, 2, 3);

// o mais comum de usar o IIFE não ter parâmetros na função

(function () {
  let x = 150;
  console.log(x);
})();

// com função arrow

(() => {
  console.log("Utilizando forma arrow #1");
})();

(() => console.log("Utilizando forma arrow #2"))();