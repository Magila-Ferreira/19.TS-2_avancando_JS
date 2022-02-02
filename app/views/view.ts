// VIEW É MÃE DAS DEMAIS CLASSES: permite reaproveitar código
// <T> TIPAGEM GENÉRICA DA CLASSE_VIEW: possibilita receber diferentes tipos de parâmetros, que serão definidos nas classes filhas
// TIPAGEM_ABSTRACT: não pode ser instanciada e permite criar métodos abstratos   
export abstract class View<T> {
    // PROPRIEDADE_PROTECTED: as CLASSES_FILHAS conseguem acessá-la
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    // PARÂMETRO-OPCIONAL_?: permite utilizar o método sem que seja necessária a declaração de um parâmetro  
    constructor(seletor: string, escapar?: boolean) {
        // FORMA DE TRATAR O RETORNNO NULLO PARA NULLCHECKS
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLLIElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique-o!`);
        }

        // LÓGICA DE TRATO DO PARÂMETRO OPCIONAL: adiciona o parâmetro opcional recebido ao método em questão
        if (escapar) {
            this.escapar = escapar;
        }
    }

    // MÉTODO_ABSTRATO: exige a sobreescrita do MÉTODO na CLASSE_FILHA, durante o desenvolvimento
    // TIPAGEM_PROTECTED: permite que o atributo seja acessado apenas dentro da CLASSE_PAI e de suas FILHAS
    protected abstract template(model: T): string;
 
    // MÉTODO_UPDATE: RENDERIZA O MÉTODO TEMPLATE
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    public remove(model: T): void {
        this.elemento.innerHTML = "";
    }
}