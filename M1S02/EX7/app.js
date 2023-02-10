let formulario = document.querySelector(".form");
formulario.addEventListener("submit", function () {
  // prevenir limpiar el formulario
  event.preventDefault();

  let a = formulario.querySelector("#nota1").value;
  let b = formulario.querySelector("#nota2").value;
  let c = formulario.querySelector("#nota3").value;
  //
  let media = (Number(a) + Number(b) + Number(c)) / 3;

  if (confirm("A media das notas e : "+media+" \nVocê quer limpar o formulario??")) {
    //   limpiar formulario
    formulario.reset();
  }
});
