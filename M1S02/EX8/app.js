let formulario = document.querySelector(".form");
console.log(formulario);

formulario.addEventListener("submit", function () {
  // prevenir limpiar el formulario
  event.preventDefault();
  let a = document.querySelector('.nome').value;
  alert('Welcome ' + a);
    //   limpiar formulario
    formulario.reset();
  
});
