// requere o módulo fs (file system) para ler e escrever arquivos
const fs = require("fs");
// cria uma variável que recebe o conteúdo do arquivo listaUsuarios.json (se o arquivo não existir, cria um novo arquivo com um array vazio
let listaUsuarios = verificarJson();

// função que verifica se o arquivo listaUsuarios.json existe e, se não existir, cria um novo arquivo com um array vazio
function verificarJson() {
  if (!fs.existsSync("./listaUsuarios.json")) {
    fs.writeFileSync("./listaUsuarios.json", "[]");
  }
  return JSON.parse(fs.readFileSync("./listaUsuarios.json"));
}
// função que recebe um objeto usuário e o adiciona ao array listaUsuarios e, em seguida, escreve o array no arquivo listaUsuarios.json
function cadastrarUsuario(usuario) {
  const emailExiste = listaUsuarios.find(
    (usuarioDaLista) => usuarioDaLista.email === usuario.email
  );
  if (emailExiste) {
    return "Email já cadastrado";
  }
  listaUsuarios.push(usuario);
  fs.writeFileSync("./listaUsuarios.json", JSON.stringify(listaUsuarios));
  return "Usuário cadastrado com sucesso";
}
//  função que recebe um email e uma senha e verifica se o email existe no array listaUsuarios e, se existir, verifica se a senha está correta
function fazerLogin(email, senha) {
  verificarJson();

  const usuario = listaUsuarios.find(
    (usuarioDaLista) => usuarioDaLista.email === email
  );
  if (!usuario) {
    return "Email não cadastrado";
  }
  if (usuario.senha !== senha) {
    return "Senha incorreta";
  }
  return "Login realizado com sucesso";
}
// função que recebe um email e uma senha e verifica se o email existe no array listaUsuarios e, se existir, verifica se a senha está correta e, se estiver, exclui o usuário do array listaUsuarios e, em seguida, escreve o array no arquivo listaUsuarios.json
function excluirUsuario(email, senha) {
  verificarJson();
  const usuario = listaUsuarios.find(
    (usuarioDaLista) => usuarioDaLista.email === email
  );
  if (!usuario) {
    return "Email não cadastrado";
  }
  if (usuario.senha !== senha) {
    return "Senha incorreta";
  }
  const index = listaUsuarios.indexOf(usuario);
  listaUsuarios.splice(index, 1);
  fs.writeFileSync("./listaUsuarios.json", JSON.stringify(listaUsuarios));
  return "Usuário excluído com sucesso";
}

module.exports = {
  cadastrarUsuario,
  fazerLogin,
  excluirUsuario,
};
