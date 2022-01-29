import { View } from "./view.js";

// MENSAGEM-VIEW É FILHA DA CLASSE_VIEWS: herda seus métodos
// <STRING> DEFINE O TIPO DE PARÂMETRO QUE A CLASSE_PAI RECEBERÁ DA FILHA
export class MensagemView extends View<string> {
    
    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}