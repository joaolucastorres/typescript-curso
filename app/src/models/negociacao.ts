import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string {
        return `Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor:${this.valor}`
    }

    public eIgual(negociacao: Negociacao): boolean {
        return negociacao.data.getDay() === this.data.getDay() && negociacao.data.getMonth() === this.data.getMonth() && negociacao.data.getFullYear() === this.data.getFullYear()
    }

}