let listaNumerosdeNumerosSorteados = [];
let numeroLimite = 15;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 15');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativa = tentativa > 1 ? `tentativas` : `tentativa`;
        let mensagemAcerto = `Você descobriu o número secreto com ${tentativa} ${mensagemTentativa}`;
        exibirTextoNaTela('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElemntendosLista = listaNumerosdeNumerosSorteados.length;

    if (quantidadeElemntendosLista == numeroLimite) {
        listaNumerosdeNumerosSorteados == [];
    }

    if (listaNumerosdeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaNumerosdeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}