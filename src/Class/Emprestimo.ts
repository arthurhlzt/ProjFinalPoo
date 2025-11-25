export default class Emprestimo {
    constructor(
        private _idLivro: string,
        private _idMembro: string,
        private _dataEmprestimo: Date,
        private _dataDevolucao: Date | null = null,
        public id: string | null = null
    ) {}
    get idLivro(): string {
        return this._idLivro;
    }

    get idMembro(): string {
        return this._idMembro;
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

    set idLivro(idLivro: string) {
        this._idLivro = idLivro;
    }

    set idMembro(idMembro: string) {
        this._idMembro = idMembro; 
    }

    set dataEmprestimo(data: Date) {
        this._dataEmprestimo = data;
    }

    public listarEmprestimo(): void {
        console.log(`\nID: Empréstimo: ${this.id} | ID Livro: ${this.idLivro} | ID Membro: ${this.idMembro} | Data Empréstimo: ${this.dataEmprestimo.toLocaleDateString()} | Data Devolução: ${this.dataDevolucao ? this.dataDevolucao.toLocaleDateString() : 'Não devolvido'}`);
    }
}