function gerarNumEntre(min, max, numRepetidos) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numRepetidos.includes(aleatorio)) {
      reject("Número repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarNumMega(qtdNum) {
  try {
    const numeros = [];
    for (let _ of Array(qtdNum).fill()) {
      numeros.push(await gerarNumEntre(1, 60, numeros));
    }
    return numeros;
  } catch(e) {
    throw "Erro";
  }
}

gerarNumMega(6)
    .then(console.log)
    .catch(console.log);