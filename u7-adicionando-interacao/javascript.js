/* Variables: cámbialas por los id y clase correspondiente */

/* id do link que desdobra o menu */
var lançador = "#link-menu";

/* id do menu que será desdobrado */
var desdobravel = "#menu";

/* classe (sem ponto) que mostra o menu */
var desdobraClasse = "menu-desdobrado";

/* declaração das funções */
function nav() {
  var lanç = document.querySelector(lançador);
  lanç.addEventListener("click", desdobraMenu, false);
}

function desdobraMenu(e) {
  e.preventDefault();
  var desdobra = document.querySelector(desdobravel);
  desdobra.classList.toggle(desdobraClasse);
}

/* Agregamos a classe `.js` ao html */
document.querySelector("html").classList.add("js");

/* Executamos a função principal */
nav();
