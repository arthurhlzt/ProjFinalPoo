import { describe, expect, it } from "@jest/globals";
import GerenciamentoLivro from './GerenciamentoLivro';

describe("Testes da Classe GerenciamentoLivro", () => {
    
    it("Deve criar uma instância de GerenciamentoLivro", () => {
        const gerenciamento = new GerenciamentoLivro();
        
        expect(gerenciamento).toBeInstanceOf(GerenciamentoLivro);
    });

    it("Deve ter o método listarLivros", () => {
        const gerenciamento = new GerenciamentoLivro();
        
        expect(gerenciamento.listarLivros).toBeDefined();
    });

    it("Deve ter o método adicionarLivro", () => {
        const gerenciamento = new GerenciamentoLivro();
        
        expect(gerenciamento.adicionarLivro).toBeDefined();
    });

    it("Deve ter o método atualizarLivro", () => {
        const gerenciamento = new GerenciamentoLivro();
        
        expect(gerenciamento.atualizarLivro).toBeDefined();
    });

    it("Deve ter o método deletarLivro", () => {
        const gerenciamento = new GerenciamentoLivro();
        
        expect(gerenciamento.deletarLivro).toBeDefined();
    });
});
