import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
// FORMA DE TRATAR O RETORNNO NULLO PARA NULLCHECKS
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error("Não foi possível inicializar a aplicação. Verifique se o Form existe!");
}


