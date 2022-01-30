// VIEW É MÃE DAS DEMAIS CLASSES: permite reaproveitar código
// <T> TIPAGEM GENÉRICA DA CLASSE_VIEW: possibilita receber diferentes tipos de parâmetros, que serão definidos nas classes filhas
// TIPAGEM_ABSTRACT: não pode ser instanciada e permite criar métodos abstratos   
export abstract class View<T> {
    // PROPRIEDADE_PROTECTED: as CLASSES_FILHAS conseguem acessá-la
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    // MÉTODO_ABSTRATO: exige a sobreescrita do MÉTODO na CLASSE_FILHA, durante o desenvolvimento
    // TIPAGEM_PROTECTED: permite que o atributo seja acessado apenas dentro da CLASSE_PAI e de suas FILHAS
    protected abstract template(model: T): string;

    // MÉTODO_UPDATE: RENDERIZA O MÉTODO TEMPLATE
    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}