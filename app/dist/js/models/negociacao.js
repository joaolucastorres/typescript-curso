export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    paraTexto() {
        return `Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor:${this.valor}`;
    }
    eIgual(negociacao) {
        return negociacao.data.getDay() === this.data.getDay() && negociacao.data.getMonth() === this.data.getMonth() && negociacao.data.getFullYear() === this.data.getFullYear();
    }
}
