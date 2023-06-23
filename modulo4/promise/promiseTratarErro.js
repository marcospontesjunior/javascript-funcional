function funcionaSOuN(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Erro!");
    } else {
      resolve(valor);
    }
  });
}

funcionaSOuN("Teste...", 0.9)
  .then((v) => console.log(v))
  .catch((err) => console.log(err)); // catch sempre no final!