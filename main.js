//declaração de função tocasomcava
 function tocacava () {
document.querySelector('#som_tecla_cava').play();
 }

 //criando a referência constante listadeteclas e buscando a classe coletiva . tecla
 const listadeteclas = document.querySelectorAll('.tecla');
 

 let contador=0;
 while(contador < 9){
listadeteclas[0].onclick=tocacava;
contador = contador + 1;
console.log(contador)
 }