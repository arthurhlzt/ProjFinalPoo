import { describe, expect, it } from "@jest/globals";
import GerenciamentoMembro from './GerenciamentoMembro';

describe("Testes da Classe GerenciamentoMembro", () => {
    
    it("Deve criar uma instância de GerenciamentoMembro", () => {
        const gerenciamento = new GerenciamentoMembro();
        
        expect(gerenciamento).toBeInstanceOf(GerenciamentoMembro);
    });

    it("Deve ter o método listarMembros", () => {
        const gerenciamento = new GerenciamentoMembro();
        
        expect(gerenciamento.listarMembros).toBeDefined();
    });

    it("Deve ter o método adicionarMembro", () => {
        const gerenciamento = new GerenciamentoMembro();
        
        expect(gerenciamento.adicionarMembro).toBeDefined();
    });

    it("Deve ter o método atualizarMembro", () => {
        const gerenciamento = new GerenciamentoMembro();
        
        expect(gerenciamento.atualizarMembro).toBeDefined();
    });

    it("Deve ter o método deletarMembro", () => {
        const gerenciamento = new GerenciamentoMembro();
        
        expect(gerenciamento.deletarMembro).toBeDefined();
    });
});
