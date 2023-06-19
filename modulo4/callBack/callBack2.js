const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dadosExemplo.txt");

const exibirCountedo = (_, conteudo) => console.log(conteudo.toString());

fs.readFile(caminho, exibirCountedo);

// para ler de forma Sync (executar passo a passo esperando ler)

console.log("Início Sync..."); // exibe primeiro
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim Sync..."); // só exibe depois de ler o arquivo