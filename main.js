//declaração de função tocasomcava
 function tocasom(idElementoAudio) {
document.querySelector(idElementoAudio).play();
 }

 //criando a referência constante listadeteclas e buscando a classe coletiva . tecla
 const listadeteclas = document.querySelectorAll('.tecla');
 

 let contador=0;
 while(contador < listadeteclas.length){
    const efeito = listadeteclas[contador].classList[1];
    const idAudio = "#som_" + efeito;
    listadeteclas[0].onclick=function(){
    tocasom(idAudio)
    }
    contador = contador + 1;
    console.log(contador);
 }