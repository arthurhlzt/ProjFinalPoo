import { Livro } from '../CadastroDeLivros/Livro';
import { Membro } from "../CadastroDeMembros/Membro";

export class Emprestimo {
    private _livro: Livro;
    private _membro: Membro;
    private _dataDeEmprestimo: Date;
    private _dataDeDevolucao: Date | null;
    
    // Array estático para armazenar todos os empréstimos
    private static emprestimosRegistrados: Emprestimo[] = [];

    constructor(livro: Livro, membro: Membro) {
        this._livro = livro;
        this._membro = membro;
        this._dataDeEmprestimo = new Date();
        this._dataDeDevolucao = null;
    }

    // Getters
    public get livro(): Livro {
        return this._livro;
    }

    public get membro(): Membro {
        return this._membro;
    }

    public get dataDeEmprestimo(): Date {
        return this._dataDeEmprestimo;
    }

    public get dataDeDevolucao(): Date | null {
        return this._dataDeDevolucao;
    }

    // Métodos CRUD
    public registrarEmprestimo(): void {
        // Adiciona ao array de empréstimos
        Emprestimo.emprestimosRegistrados.push(this);
        console.log(`Empréstimo registrado: "${this._livro.titulo}" para ${this._membro.nome}`);
    }

    public devolverEmprestimo(): void {
        // Verifica se já foi devolvido
        if (this._dataDeDevolucao) {
            throw new Error('Este livro já foi devolvido.');
        }
        // Registra a data de devolução
        this._dataDeDevolucao = new Date();
        console.log(`Livro "${this._livro.titulo}" devolvido por ${this._membro.nome}`);
    }

    public listarEmprestimos(): void {
        const status = this._dataDeDevolucao ? 'Devolvido' : 'Em aberto';
        const dataDevolucao = this._dataDeDevolucao 
            ? this._dataDeDevolucao.toLocaleDateString() 
            : 'Não devolvido';
        
        console.log(`\n--- Empréstimo ---`);
        console.log(`Livro: ${this._livro.titulo}`);
        console.log(`Membro: ${this._membro.nome}`);
        console.log(`Data de Empréstimo: ${this._dataDeEmprestimo.toLocaleDateString()}`);
        console.log(`Data de Devolução: ${dataDevolucao}`);
        console.log(`Status: ${status}`);
    }

    // Métodos de consulta
    public static listarEmprestimos(): Emprestimo[] {
        return [...Emprestimo.emprestimosRegistrados];
    }

    public static historicoEmprestimos(): void {
        const emprestimos = Emprestimo.listarEmprestimos();
        if (emprestimos.length === 0) {
            console.log('Nenhum empréstimo registrado.');
            return;
        }
        
        console.log('\n=== Histórico de Empréstimos ===');
        for (let i = 0; i < emprestimos.length; i++) {
            const e = emprestimos[i];
            const status = e.dataDeDevolucao ? '✓ Devolvido' : '⏳ Em aberto';
            console.log(`\n${i + 1}. ${e.livro.titulo} - ${e.membro.nome}`);
            console.log(`   Empréstimo: ${e.dataDeEmprestimo.toLocaleDateString()}`);
            console.log(`   Status: ${status}`);
        }
    }
}