const {
  cadastrarUsuario,
  excluirUsuario,
  fazerLogin,
} = require("./gerenciadorusuarios");

let usuario = {
  nome: "Joãos",
  email: "123@as.com",
  senha: "12ssasdf3",
};

console.log(cadastrarUsuario(usuario));
console.log(fazerLogin(usuario.email, "12s3"));
console.log(excluirUsuario(usuario.email, 'rt'));
