/*

objetivo 1 - quando o usuário clicar no botão de ver trailer, devemos abrir o modal com o video do trailer

passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js

passo 2 - dar um jeito de identificar quando o usuário clicar no botão

passo 3 - dar um jeito de pegar o elemento da modal no js

passo 4 - abrir a modal na tela

objetivo 2 - quando o usuário clciar no X devemos fechar a modal

passo 1 - dar um jeito de pegar o elemento de fechar o modal usando o js

passo 2 - dar um keito de identificar quando o usuário clicar no X

passo 3 - fechar modal

*/


const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
  modal.classList.toggle("aberto");
};


botaoTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});


