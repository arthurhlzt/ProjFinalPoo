export class Livro {
        protected _autor: string;
        protected _titulo: string;
        protected _isbn: string;
        protected _anoDePublicacao: number;

        constructor(autor: string, titulo: string, isbn: string, anoDePublicacao: number) {
            this._autor = autor;
            this._titulo = titulo;
            this._isbn = isbn;
                this._anoDePublicacao = anoDePublicacao;
            }

    public get autor(): string {
        return this._autor;
    }

    public set autor(autor: string) {
        this._autor = autor;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public get isbn(): string {
        return this._isbn;
    }
    
    public set isbn(isbn: string) {
        if (!this.validarISBN(isbn)) {
            throw new Error('ISBN inválido. Deve conter 13 dígitos ou 17 caracteres com hífens.');
        }
        this._isbn = isbn;
    }

    public get anoDePublicacao(): number {
        return this._anoDePublicacao;
    }

    public set anoDePublicacao(anoDePublicacao: number) {
        const anoAtual = new Date().getFullYear();
        if (anoDePublicacao > anoAtual) {
            throw new Error('Ano de publicação inválido. Não pode ser maior que o ano atual.');
        }
        this._anoDePublicacao = anoDePublicacao;
    }


    public validarISBN(isbn: string): boolean {
        //lógica para validar o ISBN
    }
    //formato de isbn é xxx-xx-xxxxxx-xx-x

    public cadastrarLivro(): void {
        // Lógica para cadastrar o livro na biblioteca
    }

    public listarlivros(): void {
        // Lógica para listar os livros cadastrados na biblioteca
    }

    public atualizarLivro(): void {
        // Lógica para atualizar as informações de um livro cadastrado na biblioteca
    }

    public removerLivro(): void {
        // Lógica para remover um livro cadastrado na biblioteca
    }
}

