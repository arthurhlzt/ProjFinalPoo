import { describe, expect, it } from "@jest/globals";
import Emprestimo from "./Emprestimo";
import Livro from "./Livro";
import Membro from "./Membro";

describe("Testes da Classe Emprestimo", () => {
    
    it("Deve criar um empréstimo com os dados corretos", () => {
        const livro = new Livro("1984", "George Orwell", "123456789", 1949, true, "L1");
        const membro = new Membro("João Silva", "Rua A, 123", "1234-5678", "MAT001", "M1");
        const dataEmprestimo = new Date("2024-01-15");
        const emprestimo = new Emprestimo(livro, membro, dataEmprestimo);
        
        expect(emprestimo.livro.id).toBe("L1");
        expect(emprestimo.membro.id).toBe("M1");
        expect(emprestimo.dataEmprestimo).toBe(dataEmprestimo);
        expect(emprestimo.dataDevolucao).toBeNull();
    });

    it("Deve criar um empréstimo com data de devolução", () => {
        const livro = new Livro("1984", "George Orwell", "123456789", 1949, true, "L1");
        const membro = new Membro("João Silva", "Rua A, 123", "1234-5678", "MAT001", "M1");
        const dataEmprestimo = new Date("2024-01-15");
        const dataDevolucao = new Date("2024-01-30");
        const emprestimo = new Emprestimo(livro, membro, dataEmprestimo, dataDevolucao, "1");
        
        expect(emprestimo.dataDevolucao).toBe(dataDevolucao);
        expect(emprestimo.id).toBe("1");
    });

    it("Deve alterar o livro", () => {
        const livro1 = new Livro("1984", "George Orwell", "123456789", 1949, true, "L1");
        const livro2 = new Livro("Animal Farm", "George Orwell", "987654321", 1945, true, "L2");
        const membro = new Membro("João Silva", "Rua A, 123", "1234-5678", "MAT001", "M1");
        const dataEmprestimo = new Date("2024-01-15");
        const emprestimo = new Emprestimo(livro1, membro, dataEmprestimo);
        
        emprestimo.livro = livro2;
        
        expect(emprestimo.livro.id).toBe("L2");
    });

    it("Deve alterar o membro", () => {
        const livro = new Livro("1984", "George Orwell", "123456789", 1949, true, "L1");
        const membro1 = new Membro("João Silva", "Rua A, 123", "1234-5678", "MAT001", "M1");
        const membro2 = new Membro("Maria Santos", "Rua B, 456", "8765-4321", "MAT002", "M2");
        const dataEmprestimo = new Date("2024-01-15");
        const emprestimo = new Emprestimo(livro, membro1, dataEmprestimo);
        
        emprestimo.membro = membro2;
        
        expect(emprestimo.membro.id).toBe("M2");
    });

    it("Deve alterar a data de empréstimo", () => {
        const livro = new Livro("1984", "George Orwell", "123456789", 1949, true, "L1");
        const membro = new Membro("João Silva", "Rua A, 123", "1234-5678", "MAT001", "M1");
        const dataEmprestimo = new Date("2024-01-15");
        const novaData = new Date("2024-02-01");
        const emprestimo = new Emprestimo(livro, membro, dataEmprestimo);
        
        emprestimo.dataEmprestimo = novaData;
        
        expect(emprestimo.dataEmprestimo).toBe(novaData);
    });

    it("Deve registrar a data de devolução", () => {
        const livro = new Livro("1984", "George Orwell", "123456789", 1949, true, "L1");
        const membro = new Membro("João Silva", "Rua A, 123", "1234-5678", "MAT001", "M1");
        const dataEmprestimo = new Date("2024-01-15");
        const emprestimo = new Emprestimo(livro, membro, dataEmprestimo);
        const dataDevolucao = new Date("2024-01-30");
        
        emprestimo.dataDevolucao = dataDevolucao;
        
        expect(emprestimo.dataDevolucao).toBe(dataDevolucao);
    });

    it("Deve permitir anular a data de devolução", () => {
        const livro = new Livro("1984", "George Orwell", "123456789", 1949, true, "L1");
        const membro = new Membro("João Silva", "Rua A, 123", "1234-5678", "MAT001", "M1");
        const dataEmprestimo = new Date("2024-01-15");
        const dataDevolucao = new Date("2024-01-30");
        const emprestimo = new Emprestimo(livro, membro, dataEmprestimo, dataDevolucao);
        
        emprestimo.dataDevolucao = null;
        
        expect(emprestimo.dataDevolucao).toBeNull();
    });
});
