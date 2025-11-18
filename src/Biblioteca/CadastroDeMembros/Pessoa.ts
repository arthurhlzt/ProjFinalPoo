export class Pessoa {

    private _nome: string;
    private _telefone: number;
    private _endereco: string;

    constructor(nome: string, telefone: number, endereco: string) {
        this._nome = nome;
        this._telefone = telefone;
        this._endereco = endereco;
    }
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(nome: string) {
        this._nome = nome;
    }

    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(telefone: number) {
        this._telefone = telefone;
    }
    
    public get endereco(): string {
        return this._endereco;
    }
    public set endereco(endereco: string) {
        this._endereco = endereco;
    }
}