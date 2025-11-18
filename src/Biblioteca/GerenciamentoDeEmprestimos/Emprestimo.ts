import { Livro } from '../CadastroDeLivros/Livro';
import { Membro } from "../CadastroDeMembros/Membro";

export class Emprestimo {
    private _livro: Livro;
    private _membro: Membro;
    private _dataDeEmprestimo: Date;
    private _dataDeDevolucao: Date | null;

    constructor(livro: Livro, membro: Membro) {
        this._livro = livro;
        this._membro = membro;
        this._dataDeEmprestimo = new Date();
        this._dataDeDevolucao = null;
    }

    public listarEmprestimo(): void {
  // Lógica para listar os detalhes do empréstimo
    }

    public registrarDevolucao(): void {
        this._dataDeDevolucao = new Date();
  // Lógica adicional para processar a devolução
    }

    public historicoDeEmprestimos(): void {
  // Lógica para exibir o histórico de empréstimos do membro
    }
}