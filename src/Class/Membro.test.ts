import { describe, expect, it } from "@jest/globals";
import Membro from './Membro';

describe("Testes da Classe Membro", () => {
    
    // Teste 1: Criar um membro
    it("Deve criar um membro com os dados corretos", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.nome).toBe("João Silva");
        expect(membro.endereco).toBe("Rua Exemplo, 123");
        expect(membro.telefone).toBe("53 999999999");
        expect(membro.nrMatricula).toBe("2023");
    });

    // Teste 2: Criar membro com ID
    it("Deve criar um membro com ID", () => {
        const membro = new Membro("Maria Santos", "Av. Principal, 456", "51 988888888", "2024", "1");
        
        expect(membro.id).toBe("1");
        expect(membro.nome).toBe("Maria Santos");
    });

    // Teste 3: Modificar a matrícula
    it("Deve alterar o número de matrícula", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        membro.nrMatricula = "2025";
        
        expect(membro.nrMatricula).toBe("2025");
    });

    // Teste 4: Obter nome
    it("Deve obter o nome do membro", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.nome).toBe("João Silva");
    });

    // Teste 5: Obter endereço
    it("Deve obter o endereço do membro", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.endereco).toBe("Rua Exemplo, 123");
    });

    // Teste 6: Obter telefone
    it("Deve obter o telefone do membro", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.telefone).toBe("53 999999999");
    });

    // Teste 7: Obter matrícula
    it("Deve obter o número de matrícula", () => {
        const membro = new Membro("João Silva", "Rua Exemplo, 123", "53 999999999", "2023");
        
        expect(membro.nrMatricula).toBe("2023");
    });
});
