let nomeProjeto = document.getElementById('nome-projeto');
let descricaoProjeto = document.getElementById('descricao-projeto');
let imagem = document.getElementById('imagem-projeto');


const projetos = [
    {
        nome: "To-Do-List",
        descricao: "To do List usando HTML, CSS e JAVASCRIPT com um banco de dados local no navegador.",
        img: './assets/images/projeto1.jpg',
        projetoURL: 'https://github.com/KarenGomes/To-Do-List'
    },
    {
        nome: "ExpressaoPos-fixa",
        descricao: "A notação pós-fixa, diferentemente da notação infixa tradicional, o operador é posicionado após os operandos, dessa forma dispensando o uso de parênteses. Programa em C que recebe uma expressão pós-fixa, preenche uma fila dinâmica e retorna o resultado da expressão.",
        img: './assets/images/projeto2.jpg',
        projetoURL: 'https://github.com/KarenGomes/ExpressaoPos-fixa'
    },
    {
        nome: "7DaysOfCodeALURA",
        descricao: "#7DaysOfCode HTML e CSS. Criando uma página completa de 'Vagas' de uma empresa fictícia com Giovanna Moeller.",
        img: './assets/images/projeto3.jpg',
        projetoURL: 'https://github.com/KarenGomes/7DaysOfCodeALURA'
    }
]

let indice = 0;

if(indice == 0){
    VerificaElemento();
}

function AtualizaElementos() {
    nomeProjeto.innerText = projetos[indice].nome;
    descricaoProjeto.innerText = projetos[indice].descricao;
}

function VerificaElemento(){
    if (indice === 0) {
        AtualizaElementos();
        CriaElemento();
    }else if ( indice === 1) {
        AtualizaElementos();
        CriaElemento();
    }else {
        AtualizaElementos();
        CriaElemento();
    }
    
}


function MudarProjetoDireta(){
    if (indice < 2) {
        indice++;
        VerificaElemento();
    }
}

function MudarProjetoEsquerda(){
    if (indice > 0) {
        indice--;
        VerificaElemento();
    }
}

function Redireciona(){
    window.location.href = projetos[indice].projetoURL;
}

function CriaElemento(){
    imagem.innerHTML = `<img src="${projetos[indice].img}" id= "imagem-add">`;
}