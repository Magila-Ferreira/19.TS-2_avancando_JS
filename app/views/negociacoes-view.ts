import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

// NEGOCIACOES-VIEW É FILHA DA CLASSE_VIEWS: herda seus métodos
// <NEGOCIACOES> DEFINE O TIPO DE PARÂMETRO QUE A CLASSE_PAI RECEBERÁ DA FILHA
export class NegociacoesView extends View<Negociacoes> {
    // MÉTODO_TEMPLATE: DECLARA O LAYOUT QUE SERÁ RENDERIZADO NA PÁGINA
    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model
                        .lista()
                        .map((negociacao) => {
                            return `
                            <tr>
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
                        })
                        .join("")}
                </tbody>
            </table>
        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}