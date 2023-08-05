const http = require("http");
const fs = require("fs");

// inicio de funções para manipular arquivos
/*
 *Função para ler um arquivo JSON
 @param {string} arquivo - nome do arquivo a ser lido
 */
function readJson(arquivo) {
  const content = fs.readFileSync(arquivo, "utf-8");
  content ? console.table(JSON.parse(content)) : console.log("Array vazio");
  return content;
}
/*
 *Função para adicionar um novo produto ao arquivo JSON
 @param {string} body - corpo da requisição
 */
function addData(body) {
  // novo produto com o corpo da requisição
  let novoProduto = JSON.parse(body);
  // array de objetos para armazenar os produtos
  let produtos = null;
  // lê o arquivo JSON e converte para um array de objetos

  try {
    // se o arquivo existir, converte para array de objetos
    produtos = JSON.parse(readJson("./dados.json"));
  } catch (error) {
    // se o arquivo não existir, cria um array vazio e exibe mensagem no console
    console.log("Array inexistente no arquivo, criando novo array vazio");
    produtos = [];
  }
  // novo id para o produto a ser adicionado
  let novaid = produtos.length + 1;
  // adiciona o novo id ao produto
  novoProduto.id = novaid;
  // adiciona o novo produto ao array de produtos
  produtos.push(novoProduto);
  // converte o array de produtos para JSON
  const json = JSON.stringify(produtos);
  // escreve o JSON no arquivo
  fs.writeFileSync("./dados.json", json);
}
// fim de funções para manipular arquivos

// Criação  de um servidor HTTP
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      break;
    case "/produtos":
      switch (req.method) {
        // se for GET
        case "GET":
          // lê o arquivo JSON e envia como resposta
          try {
            let data = readJson("./dados.json");
            res.writeHead(200, {
              "Content-Type": "application/json; charset=utf-8",
            });
            res.write(data);
            res.end();
          } catch (error) {
            // se houver erro, envia status 500 e mensagem de erro
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            res.write(`Erro interno do servidor : ${error}`);
            res.end();
          }

          break;
        // se for POST
        case "POST":
          // adiciona o novo produto ao arquivo JSON
          try {
            let body = "";
            req.on("data", (chunk) => {
              body += chunk;
              addData(body);
            });
            res.writeHead(200, {
              "Content-Type": "application/json; charset=utf-8",
            });
            res.write(`Atualizado com successo `);
            res.end();
          } catch (error) {
            // se houver erro, envia status 500 e mensagem de erro
            res.writeHead(500, {
              "Content-Type": "application/json; charset=utf-8",
            });
            res.write(`Erro interno do servidor : ${error}`);
            res.end();
          }

          break;
      }
      break;
    default:
      // se o endpoint não for tratado, envia status 404 e mensagem de erro
      res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      res.write(`ENDPOINT não encontrado`);
      res.end();
      break;
  }
});
// Porta do servidor
const PORT = 3000;
// Inicia o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
