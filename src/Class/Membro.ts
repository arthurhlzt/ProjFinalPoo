import Pessoa from "./Pessoa";

export default class Membro extends Pessoa {
    constructor(
        nome: string,
        endereco: string,
        telefone: string,
        private _nrMatricula: string,
        id: string | null = null
    ) {
        super(nome, endereco, telefone, id);
    }

    get nrMatricula(): string {
        return this._nrMatricula;
    }

    set nrMatricula(nrMatricula: string) {
        this._nrMatricula = nrMatricula;
    }
    
    public listarMembro(): void {
        console.log(`ID:Membro: ${this.id} | Nome: ${this.nome} | Endereço: ${this.endereco} | Telefone: ${this.telefone} | Matrícula: ${this.nrMatricula}`);
    }
}