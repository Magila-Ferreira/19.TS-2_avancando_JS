import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView", true);
    private mensagemView = new MensagemView("#mensagemView");
    private mensagemViewFDS = new MensagemView("#mensagemView__FDS");

    constructor() {
        /* SILENCIAR O NULLCHECK: não reclama o retorno de um objeto nullo para QUERY_SELECTOR */
        this.inputData = <HTMLInputElement>document.querySelector("#data");
        /* FORMA CONVENCIONAL DE SILENCIAR O NULLCHECK */
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        
        if (!this.verificaDiaUtil(negociacao.data)) {
            this.mensagemView.remove("");
            this.mensagemViewFDS.update(
                "As negociações só podem ser realizadas em dias úteis!"
            );
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private verificaDiaUtil(data: Date) {
        const diaDaSemana =
            data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO;
        return diaDaSemana;
    }

    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemViewFDS.remove("");
        this.mensagemView.update("Negociação realizada com sucesso!!!");
    }
}
