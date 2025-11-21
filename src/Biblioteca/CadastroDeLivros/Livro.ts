export class Livro {
    protected _autor: string = "";
    protected _titulo: string = "";
    protected _isbn: string = "";
    protected _anoDePublicacao: number = 0;
    

    private static livrosCadastrados: Livro[] = [];

    constructor(autor: string, titulo: string, isbn: string, anoDePublicacao: number) {
        this.autor = autor;
        this.titulo = titulo;
        this.isbn = isbn;
        this.anoDePublicacao = anoDePublicacao;
    }


    public get autor(): string { 
        return this._autor; 
    }
    public set autor(autor: string) {
        if (autor.length < 3 || autor.length > 20) throw new Error("Nome Inválido");
        this._autor = autor;
    }

    public get titulo(): string { 
        return this._titulo; 
    }
    public set titulo(titulo: string) {
        if (titulo.length < 3 || titulo.length > 100) throw new Error("Título Inválido");
        this._titulo = titulo;
    }

    public get isbn(): string { 
        return this._isbn; 
    }
    public set isbn(isbn: string) {
        if (!this.validarISBN(isbn)) throw new Error('ISBN inválido. Deve conter 13 dígitos.');
        this._isbn = isbn;
    }

    public get anoDePublicacao(): number { 
        return this._anoDePublicacao; 
    }
    public set anoDePublicacao(anoDePublicacao: number) {
        if (anoDePublicacao > 2025) throw new Error('Ano de publicação inválido.');
        this._anoDePublicacao = anoDePublicacao;
    }


    public validarISBN(isbn: string): boolean {
        const isbnLimpo = isbn.replace(/[-\s]/g, '');
        return /^\d{13}$/.test(isbnLimpo);
    }

    public formatarISBN(isbn: string): string {
        const isbnLimpo = isbn.replace(/[-\s]/g, '');
        if (!this.validarISBN(isbn)) throw new Error('ISBN inválido para formatação');
        // Formato: XXX-X-XX-XXXXXX-X
        return `${isbnLimpo.slice(0, 3)}-${isbnLimpo.slice(3, 4)}-${isbnLimpo.slice(4, 6)}-${isbnLimpo.slice(6, 12)}-${isbnLimpo.slice(12, 13)}`;
    }


    // Métodos CRUD
    public cadastrar(): void {
        // Verifica se já existe
        if (Livro.buscarPorISBN(this._isbn)) {
            throw new Error(`Livro com ISBN ${this._isbn} já cadastrado.`);
        }
        // Adiciona ao array
        Livro.livrosCadastrados.push(this);
        console.log(`Livro "${this._titulo}" cadastrado com sucesso!`);
    }

    // Métodos de consulta
    public static listarTodos(): Livro[] {
        return [...Livro.livrosCadastrados];
    }

    public static buscarPorISBN(isbn: string): Livro | undefined {
        return Livro.livrosCadastrados.find(livro => livro.isbn === isbn);
    }

    public static exibirLista(): void {
        const livros = Livro.listarTodos();
        if (livros.length === 0) {
            console.log('Nenhum livro cadastrado.');
            return;
        }
        
        console.log('\n=== Livros Cadastrados ===');
        for (let i = 0; i < livros.length; i++) {
            console.log(`\n${i + 1}. ${livros[i].titulo}`);
            console.log(`   Autor: ${livros[i].autor}`);
            console.log(`   ISBN: ${livros[i].isbn}`);
            console.log(`   Ano: ${livros[i].anoDePublicacao}`);
        }
    }

    public atualizar(novosDados: { autor?: string; titulo?: string; anoDePublicacao?: number }): void {
        // Atualiza apenas os campos fornecidos
        if (novosDados.autor) this.autor = novosDados.autor;
        if (novosDados.titulo) this.titulo = novosDados.titulo;
        if (novosDados.anoDePublicacao) this.anoDePublicacao = novosDados.anoDePublicacao;
        console.log(`Livro "${this._titulo}" atualizado com sucesso!`);
    }

    public remover(): void {
        const quantidadeInicial = Livro.livrosCadastrados.length;
        // Remove pelo ISBN
        Livro.livrosCadastrados = Livro.livrosCadastrados.filter(livro => livro.isbn !== this._isbn);
        // Verifica se removeu
        if (Livro.livrosCadastrados.length === quantidadeInicial) {
            throw new Error(`Livro com ISBN ${this._isbn} não encontrado.`);
        }
        console.log(`Livro "${this._titulo}" removido com sucesso!`);
    }
}

