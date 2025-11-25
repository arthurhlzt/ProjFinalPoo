export default class Livro {
    constructor(
        private _titulo: string,
        private _autor: string,
        private _isbn: string,
        private _anoPublicacao: number,
        private _disponivel: boolean = true,
        public id: string | null = null
    ) {}

    get titulo(): string {
        return this._titulo;
    }

    get autor(): string {
        return this._autor;
    }

    get isbn(): string {
        return this._isbn;
    }

    get anoPublicacao(): number {
        return this._anoPublicacao;
    }

    get disponivel(): boolean {
        return this._disponivel;
    }

    set disponivel(value: boolean) {
        this._disponivel = value;
    }

    set titulo(titulo: string) {
        this._titulo = titulo;
    }

    set autor(autor: string) {
        this._autor = autor;
    }

    set isbn(isbn: string) {
        this._isbn = isbn;
    }

    set anoPublicacao(ano: number) {
        this._anoPublicacao = ano;
    }

    public listarLivro(): void {
        console.log(`\nID:Livro: ${this.id} | Título: ${this.titulo} | Autor: ${this.autor} | ISBN: ${this.isbn} | Ano de Publicação: ${this.anoPublicacao} | Disponível: ${this.disponivel ? 'Sim' : 'Não'}`);
}
}