import { describe, expect, it } from "@jest/globals";
import GerenciamentoEmprestimo from './GerenciamentoEmprestimo';

describe("Testes da Classe GerenciamentoEmprestimo", () => {
    
    it("Deve criar uma instância de GerenciamentoEmprestimo", () => {
        const gerenciamento = new GerenciamentoEmprestimo();
        
        expect(gerenciamento).toBeInstanceOf(GerenciamentoEmprestimo);
    });

    it("Deve ter o método adicionarEmprestimo", () => {
        const gerenciamento = new GerenciamentoEmprestimo();
        
        expect(gerenciamento.adicionarEmprestimo).toBeDefined();
    });

    it("Deve ter o método deletarEmprestimo", () => {
        const gerenciamento = new GerenciamentoEmprestimo();
        
        expect(gerenciamento.deletarEmprestimo).toBeDefined();
    });

    it("Deve ter o método buscarEmprestimoPorId", () => {
        const gerenciamento = new GerenciamentoEmprestimo();
        
        expect(gerenciamento.buscarEmprestimoPorId).toBeDefined();
    });

    it("Deve ter o método listarEmprestimos", () => {
        const gerenciamento = new GerenciamentoEmprestimo();
        
        expect(gerenciamento.listarEmprestimos).toBeDefined();
    });

    it("Deve ter o método atualizarEmprestimo", () => {
        const gerenciamento = new GerenciamentoEmprestimo();
        
        expect(gerenciamento.atualizarEmprestimo).toBeDefined();
    });
});
