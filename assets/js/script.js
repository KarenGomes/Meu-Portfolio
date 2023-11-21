let nomeProjeto = document.getElementById('nome-projeto');
let descricaoProjeto = document.getElementById('descricao-projeto');
let imagem = document.getElementById('imagem-projeto');


const projetos = [
    {
        nome: "nome",
        descricao: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
        img: 'caminho da imagem',
        projetoURL: 'link'
    },
    {
        nome: "nome 2",
        descricao: "descrição do projeto 2",
        img: 'caminho da imagem',
        projetoURL: 'link'
    },
    {
        nome: "nome 3",
        descricao: "descrição do projeto 3",
        img: 'caminho da imagem',
        projetoURL: 'link'
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
    }else if ( indice === 1) {
        AtualizaElementos();
    }else {
        AtualizaElementos();
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