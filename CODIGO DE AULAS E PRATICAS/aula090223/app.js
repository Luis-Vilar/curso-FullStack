let titulo = document.getElementById("titulo");
titulo.textContent = "Aparecida Nutricionista";
// get de una lista de todos los elementos de una class
document.getElementsByClassName("form");
// metodo get mas usado
// se utiliza el selector de css
// devuelve el primer elemento de la lista
let formulario = document.querySelector(".form");
formulario.addEventListener("submit", function () {
    // prevenir limpiar el formulario
  event.preventDefault();
  alert("botao de submeter accionado!");
  let email = formulario.querySelector("#exampleInputEmail1").value;
  let password = formulario.querySelector("#exampleInputPassword1").value;
  const usuario = {emailUsuario: email, passUsuario: password}; 
  console.log(usuario);
//   limpiar formulario
  formulario.reset();
});
