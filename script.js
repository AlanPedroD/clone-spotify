let botao = document.querySelector('.btn');

var navbar = document.getElementById('navbar');

let rodape = document.querySelector('.rodape');

let showcase = document.getElementById('showcase');

let btnPrimary = document.querySelector('.btn-primary');


botao.addEventListener('click', function(){

    var imagemAtual = showcase.style.backgroundImage;

    if (imagemAtual === 'url("imagens/fundo-spotify-nv-03.jpg")' || imagemAtual === '') {
        showcase.style.backgroundImage = 'url("imagens/imagem-fundo-spotify-04.jpg")';
        showcase.style.backgroundSize = 'cover';
        showcase.style.backgroundPosition = 'center';
    } else {
        showcase.style.backgroundImage = 'url("imagens/fundo-spotify-nv-03.jpg")';
    }
    btnPrimary.classList.toggle('ligth');
    botao.classList.toggle('light-theme');
    navbar.classList.toggle('ligth');
    rodape.classList.toggle('ligth');
    if(botao.textContent === 'Dark'){
        botao.textContent = 'Ligth';
    }else{
        botao.textContent = 'Dark';
    }
})
