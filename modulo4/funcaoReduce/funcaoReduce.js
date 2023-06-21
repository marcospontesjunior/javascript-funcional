const compra = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

// achar o valor total pela quantidade dos itens
const valorTotalPerProduto = (produto) => produto.qtde * produto.preco;
const valorTotalPorQtde = compra.map(valorTotalPerProduto);

console.log(valorTotalPorQtde);

// achar o valor final
const somaTotalProdutos = (acc, el) => acc + el;
const valorTotalCompra = compra
  .map(valorTotalPerProduto)
  .reduce(somaTotalProdutos); // como não foi passada elemento ele tá somando o index 0 e 1 do array primeiramente

console.log(valorTotalCompra);