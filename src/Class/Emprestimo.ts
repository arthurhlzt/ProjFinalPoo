import Livro from "./Livro";
import Membro from "./Membro";

export default class Emprestimo {
    constructor(
        private _livro: Livro,
        private _membro: Membro,
        private _dataEmprestimo: Date,
        private _dataDevolucao: Date | null = null,
        public id: string | null = null
    ) {}

    get livro(): Livro {
        return this._livro;
    }

    get membro(): Membro {
        return this._membro;
    }

    get dataEmprestimo(): Date {
        return this._dataEmprestimo;
    }

    get dataDevolucao(): Date | null {
        return this._dataDevolucao;
    }

    set dataDevolucao(data: Date | null) {
        this._dataDevolucao = data;
    }

    set livro(livro: Livro) {
        this._livro = livro;
    }

    set membro(membro: Membro) {
        this._membro = membro;
    }

    set dataEmprestimo(data: Date) {
        this._dataEmprestimo = data;
    }

    public listarEmprestimo(): void {
        console.log(`\nID Empréstimo: ${this.id} | Livro: ${this.livro.titulo} (ID: ${this.livro.id}) | Membro: ${this.membro.nome} (ID: ${this.membro.id}) | Data Empréstimo: ${this.dataEmprestimo.toLocaleDateString()} | Data Devolução: ${this.dataDevolucao ? this.dataDevolucao.toLocaleDateString() : 'Não devolvido'}`);
    }
}