const compra = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

// filtrar os itens no array
const qtdeMaiorQueZero = (item) => item.qtde > 1;

const produtosValidos = compra.filter(qtdeMaiorQueZero);

console.log(produtosValidos);

// usando map para pegar somente os nomes dos produtos
const nome = (nome) => nome.nome;

const produtosValidos1 = compra.filter(qtdeMaiorQueZero).map(nome);

console.log(produtosValidos1);