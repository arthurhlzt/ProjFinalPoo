export default abstract class Pessoa {
    constructor(
        protected _nome: string,
        protected _endereco: string,
        protected _telefone: string,
        public id: string | null = null
    ) { }
    get nome(): string {
        return this._nome;
    }

    get endereco(): string {
        return this._endereco;
    }

    get telefone(): string {
        return this._telefone;
    }

    public abstract listarMembro(): void;
}
