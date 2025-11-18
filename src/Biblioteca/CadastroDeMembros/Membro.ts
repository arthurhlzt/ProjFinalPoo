import { Pessoa } from "./Pessoa";

export class Membro extends Pessoa {
    private _numeroDeMatricula: string = "";

    constructor(nome: string, telefone: number, endereco: string, numeroDeMatricula: string) {
        super(nome, telefone, endereco);
        this._numeroDeMatricula = numeroDeMatricula;
    }

    public get numeroDeMatricula(): string {
        return this._numeroDeMatricula;
    }

    public set numeroDeMatricula(nr: string) {
        this._numeroDeMatricula = nr;
    }
}