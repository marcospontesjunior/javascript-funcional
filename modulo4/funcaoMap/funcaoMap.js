const nums = [1, 2, 3, 4, 5]; // array
const dobro = (n) => n * 2;

console.log(nums.map(dobro)); // dentro do map tem a função callback

const nums1 = [1, 2, 3, 4, 5];
const dobro1 = (n, i) => n * 2 + i; // i -> index [0, 1, 2, 3, 4]

console.log(nums1.map(dobro1));

const nomes = ["Ana", "Bia", "Gui", "Lucas", "Gabriel"];
const primeiraLetra = (texto) => texto[0];
const letra = nomes.map(primeiraLetra);
console.log(nomes, letra);

const compra = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

// usando map, mapear nome dos produtos e pegar os valores pelo preço

const nomeProduto = (nome) => nome.nome;

console.log(compra.map(nomeProduto));

const valorTotal = (objeto) => objeto.qtde * objeto.preco;

console.log(compra.map(valorTotal));
