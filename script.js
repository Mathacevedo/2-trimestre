const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1",
            alternativas: [
            {
            texto:"Alternativa 1",
            afirmação:"afirmação",
            },
            {
            texto:"Alternativa 2",
            afirmação:"afirmção",
            },



        ]
    },]
let atual = 0;
let perguntaAtual;
let historiafinal=""

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click",()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoselecionada){
    cosntafirmacoes = opcaoselecionada.afirmacoes;
    historiafinal = afirmacoes;
    atual++;
    mostraPergunta();
}
