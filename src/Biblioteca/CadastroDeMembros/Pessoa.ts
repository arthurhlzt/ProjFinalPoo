export class Pessoa {

    protected _nome: string;
    protected _telefone: number;
    protected _endereco: string;

    constructor(nome: string, telefone: number, endereco: string) {
        this._nome = nome;
        this._telefone = telefone;
        this._endereco = endereco;
    }
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(nome: string) {
        if (nome.length < 3 || nome.length > 20) {
            throw new Error("Nome Inválido")
        }
        this._nome = nome;
    }

    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(tel: number) {
        this._telefone = tel;
    }
    
    public get endereco(): string {
        return this._endereco;
    }
    public set endereco(endereco: string) {
        this._endereco = endereco;
    }
}