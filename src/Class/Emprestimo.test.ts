import { describe, expect, it } from "@jest/globals";
import Emprestimo from "./Emprestimo";

describe("Testes da Classe Emprestimo", () => {
    
    it("Deve criar um empréstimo com os dados corretos", () => {
        const dataEmprestimo = new Date("2024-01-15");
        const emprestimo = new Emprestimo("L1", "M1", dataEmprestimo);
        
        expect(emprestimo.idLivro).toBe("L1");
        expect(emprestimo.idMembro).toBe("M1");
        expect(emprestimo.dataEmprestimo).toBe(dataEmprestimo);
        expect(emprestimo.dataDevolucao).toBeNull();
    });

    it("Deve criar um empréstimo com data de devolução", () => {
        const dataEmprestimo = new Date("2024-01-15");
        const dataDevolucao = new Date("2024-01-30");
        const emprestimo = new Emprestimo("L1", "M1", dataEmprestimo, dataDevolucao, "1");
        
        expect(emprestimo.dataDevolucao).toBe(dataDevolucao);
        expect(emprestimo.id).toBe("1");
    });

    it("Deve alterar o ID do livro", () => {
        const dataEmprestimo = new Date("2024-01-15");
        const emprestimo = new Emprestimo("L1", "M1", dataEmprestimo);
        
        emprestimo.idLivro = "L2";
        
        expect(emprestimo.idLivro).toBe("L2");
    });

    it("Deve alterar o ID do membro", () => {
        const dataEmprestimo = new Date("2024-01-15");
        const emprestimo = new Emprestimo("L1", "M1", dataEmprestimo);
        
        emprestimo.idMembro = "M2";
        
        expect(emprestimo.idMembro).toBe("M2");
    });

    it("Deve alterar a data de empréstimo", () => {
        const dataEmprestimo = new Date("2024-01-15");
        const novaData = new Date("2024-02-01");
        const emprestimo = new Emprestimo("L1", "M1", dataEmprestimo);
        
        emprestimo.dataEmprestimo = novaData;
        
        expect(emprestimo.dataEmprestimo).toBe(novaData);
    });

    it("Deve registrar a data de devolução", () => {
        const dataEmprestimo = new Date("2024-01-15");
        const emprestimo = new Emprestimo("L1", "M1", dataEmprestimo);
        const dataDevolucao = new Date("2024-01-30");
        
        emprestimo.dataDevolucao = dataDevolucao;
        
        expect(emprestimo.dataDevolucao).toBe(dataDevolucao);
    });

    it("Deve permitir anular a data de devolução", () => {
        const dataEmprestimo = new Date("2024-01-15");
        const dataDevolucao = new Date("2024-01-30");
        const emprestimo = new Emprestimo("L1", "M1", dataEmprestimo, dataDevolucao);
        
        emprestimo.dataDevolucao = null;
        
        expect(emprestimo.dataDevolucao).toBeNull();
    });
});
