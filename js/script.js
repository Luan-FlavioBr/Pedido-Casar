const errorOut = document.getElementById('error-msg');
const buttonSim = document.getElementById('btn-sim');
const buttonNao = document.getElementById('btn-nao');
const mensagemDeErro = ['Você escolheu a opção incorreta!', 'A opção que você escolheu não está disponível', 'Você tem certeza?', 'Pensa denovo!'];

function sorteiaMensagem(){
    const escolhido = Math.floor(Math.random() * mensagemDeErro.length);
    return mensagemDeErro[escolhido];
}

let tentativas = 0;
function btnNaoClique() {
    tentativas += 1;
    if (tentativas >= 10) {
        errorOut.innerText = 'A opção que você escolheu não está disponível';
        mudaBotao();
    } else {
        errorOut.style.color = 'red';
        errorOut.innerText = sorteiaMensagem();
        errorAnimate();
    }
}

function mudaBotao(t) {
    buttonNao.style.transform = `translate(-${verificaPosicaoX()}px, -${verificaPosicaoY()}px)`;
}

const larguraTela = window.screen.width;
const alturaTela = window.screen.height;

function verificaPosicaoX() {
    while (true) {
        let posX = sorteiaPosicaoX();
        if(posX <= larguraTela) {
            return posX;
        } else {
            continue
        }
    }
}

function verificaPosicaoY() {
    while (true) {
        let posY = sorteiaPosicaoY();
        if(posY <= alturaTela) {
            return posY;
        } else {
            continue
        }
    }
}

function sorteiaPosicaoX() {
    let larguraSorteada = Math.floor(Math.random() * 400);
    return larguraSorteada;
}

function sorteiaPosicaoY() {
    let alturaSorteada = Math.floor(Math.random() * 400);
    return alturaSorteada;
}

function errorAnimate() {
    const erro = [
        { transform: "translateX(0px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(0px)" },
        { transform: "translateX(5px)" }
    ];

    const duracao = {
        duration: 250,
        iterations: 3
    };

    buttonNao.animate(erro, duracao);
}

function btnSimClique() {
    buttonNao.style.display = 'none';
    errorOut.style.color = 'green';
    errorOut.innerText = 'Me chama no zap então vida ❤, (11) 95978-9345';
}



buttonNao.addEventListener("mouseover", function( event ) {
    if(tentativas >= 10) {
        mudaBotao();
    } else {
        buttonNao.onclick = btnNaoClique;
    }
});



buttonSim.onclick = btnSimClique;