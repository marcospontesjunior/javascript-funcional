const numero = [1, 2, 3, 4, 5, 6];

const soma = (total, elemento) => total + elemento;

const total = numero.reduce(soma);
console.log(total);

const media = (acumulador, elemento, i, array) => {
  if (i === array.length - 1) {
    return (acumulador + elemento) / array.length;
  } else {
    return acumulador + elemento;
  }
};

const resultado = numero.reduce(media);
console.log(resultado);