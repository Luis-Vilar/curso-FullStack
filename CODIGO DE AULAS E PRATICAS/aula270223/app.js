let variavel;

function minhaFuncao() {
  variavel = setInterval(consoleLog, 2000);

}
function consoleLog(){
console.log('Ola, turma Itaguaçu');

}

function pararFuncao(){

    clearInterval(variavel);
}

document.getElementById('btnOn').onclick = minhaFuncao ;
document.getElementById('btnOff').onclick = pararFuncao ;