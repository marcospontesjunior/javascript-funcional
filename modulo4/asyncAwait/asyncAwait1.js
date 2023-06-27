function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
}

function retornaValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  let valor = await retornaValor();

  await esperarPor(2000);
  console.log(`Executando Async/Await ${valor}...`);
  await esperarPor(2000);
  console.log(`Executando Async/Await ${valor + 1}...`);
  await esperarPor(2000);
  console.log(`Executando Async/Await ${valor + 2}...`);
}

executar();

/* por trás do Async/Await tem que ter uma Promise! */