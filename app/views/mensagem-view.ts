import { View } from "./view.js";

// MENSAGEM-VIEW É FILHA DA CLASSE_VIEWS: herda seus métodos
// <STRING> DEFINE O TIPO DE PARÂMETRO QUE A CLASSE_PAI RECEBERÁ DA FILHA
export class MensagemView extends View<string> {
    protected template(model: string): string {
        const mensagemInfo = `
            <p class="alert alert-info">${model}</p>
        `;

        const mensagemDanger = `
            <p class="alert alert-danger">${model}</p>
        `;

        if (model === "As negociações só podem ser realizadas em dias úteis!") {
            return mensagemDanger;
        } else {
            return mensagemInfo;
        }
    }
}
