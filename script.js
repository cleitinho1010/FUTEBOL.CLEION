const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "QUAL O PAÍS COM MAIS COPAS DO MUNDO?",
        alternativas: [
            {
                texto: "BRASIL",
                afirmacao: "1 CERTA: "
            },
            {
                texto: "FRANÇA",
                afirmacao: "1 ERRADA:"
            }
        ]
    },
    {
        enunciado: "QUAL TIME É CONSIDERADO O MAIOR DO MUNDO?",
        alternativas: [
            {
                texto: "BARCELONA",
                afirmacao: "2 ERRADA:"
            },
            {
                texto: "REAL MADRID",
                afirmacao: "2 CERTA:"
            }
        ]
    },
    {
        enunciado: "QUAL O MAIOR CAMPEÃO BRASILEIRO?",
        alternativas: [
            {
                texto: "CORINTHIANS",
                afirmacao: "3 ERRADA:"
            },
            {
                texto: "PALMEIRAS",
                afirmacao: "3 CERTA:"
            }
        ]
    },
    {
        enunciado: "QUAL O MAIOR CAMPEÃO DA LIBERTADORES?",
        alternativas: [
            {
                texto: "INDEPENDIENTE",
                afirmacao: "4 CERTA"
            },
            {
                texto: "FLAMENGO",
                afirmacao: "4 ERRADA:"
            }
        ]
    },
    {
        enunciado: "QUAL O TIME DO BRASIL COM A MAIOR TORCIDAS",
        alternativas: [
            {
                texto: "FLAMENGO",
                afirmacao: "5 CERTA"
            },
            {
                texto: "BAHIA",
                afirmacao: "5 ERRADA"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
