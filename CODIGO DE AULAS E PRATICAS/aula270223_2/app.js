function piscar() {
  // alert('boton funcionando');
  let contador = 0;
  let intervalo = 0;

  while (contador < 10) {

    intervalo = intervalo + 300;
    setTimeout("document.getElementById('lampada').src='on.jpg' ;" , intervalo);

    intervalo = intervalo + 300;
    setTimeout("document.getElementById('lampada').src='off.jpg';" , intervalo);
    

    contador++;
  }
}
