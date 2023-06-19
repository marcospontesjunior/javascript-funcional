function bomDia() {
  console.log("Bom dia!");
}

function boaNoite() {
  console.log("Boa Noite!");
}

// função como parametro para outra função
function executarFN(fn) {
  if (typeof fn === "function") fn();
}

executarFN(bomDia);
executarFN(boaNoite);
executarFN(3); // na função existe uma condição do parâmetro ser = a function, aaqui será ignorado!

// 1 == '1' (trtue) comparação; 1 === '1' (falso) comparação estrita, mesmo tipo e mesmo valor

// função retornada a partir de outra função
function potenciacao(base, exp) {
  return Math.pow(base, exp);
}

const bit8 = potenciacao(2, 8);
console.log(bit8);