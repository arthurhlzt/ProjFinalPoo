import { describe, expect, it } from "@jest/globals";
import Membro from './Membro';

describe("Testes da Classe Membro", () => {
    
    it("Deve criar um membro com os dados corretos", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.nome).toBe("João Silva");
        expect(membro.endereco).toBe("Rua Exemplo, 123");
        expect(membro.telefone).toBe("53 999999999");
        expect(membro.nrMatricula).toBe("2023");
    });

    it("Deve criar um membro com ID", () => {
        const membro = new Membro("Maria Santos", "Av. Principal, 456", "51 988888888", "2024", "1");
        
        expect(membro.id).toBe("1");
        expect(membro.nome).toBe("Maria Santos");
    });

    it("Deve alterar o número de matrícula", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        membro.nrMatricula = "2025";
        
        expect(membro.nrMatricula).toBe("2025");
    });

    it("Deve obter o nome do membro", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.nome).toBe("João Silva");
    });

    it("Deve obter o endereço do membro", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.endereco).toBe("Rua Exemplo, 123");
    });

    it("Deve obter o telefone do membro", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.telefone).toBe("53 999999999");
    });

    it("Deve obter o número de matrícula", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.nrMatricula).toBe("2023");
    });
});
