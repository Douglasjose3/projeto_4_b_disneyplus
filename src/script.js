document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // pegar todos os botões
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSelection = document.querySelector('.hero');
    const alturaHero = heroSelection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY; // busca a altura para o conteúdo aparecer

        if (posicaoAtual < alturaHero) {
            ocultaElementosHeader();
        } else {
            exibeElementosDoHeader();
        }
    })
    
    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) { // evento ao clique dos botões
        buttons[i].addEventListener('click', function(botao) { // procurar e acessar o target do botão no console (inspect)
            // console.log(botao.target.dataset.tabButton); // acessando o target do botão
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is--active');
        })

        // Seção FAQ, accordion
        for (let i = 0; i < questions.length; i++) {
            questions[i].addEventListener('click', abreOuFechaResposta);
        }
    }
})

function ocultaElementosHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is--hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is--hidden');
}

function abreOuFechaResposta(elemento) {
    const classe= 'faq__questions__item--is--open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}


function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function escondeTodasAbas() {
    const tabsCotainers = document.querySelectorAll('[data-tab-id]'); // pegar todas as uls

    for (let i = 0; i < tabsCotainers.length; i++) {  // todas as abas
        tabsCotainers[i].classList.remove('shows__list--is--active'); // remover a class active
    }
}