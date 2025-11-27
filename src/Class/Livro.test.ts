import { describe, expect, it } from "@jest/globals";
import Livro from "./Livro";

describe("Testes da Classe Livro", () => {
    
    it("Deve criar um livro com os dados corretos", () => {
        const livro = new Livro("1984", "George Orwell", "978-0-452-28423-4", 1949);
        
        expect(livro.titulo).toBe("1984");
        expect(livro.autor).toBe("George Orwell");
        expect(livro.isbn).toBe("978-0-452-28423-4");
        expect(livro.anoPublicacao).toBe(1949);
        expect(livro.disponivel).toBe(true);
    });

    it("Deve alterar o título do livro", () => {
        const livro = new Livro("Título Antigo", "Autor", "978-1-234-56789-0", 2000);
        
        livro.titulo = "Título Novo";
        
        expect(livro.titulo).toBe("Título Novo");
    });

    it("Deve alterar o autor do livro", () => {
        const livro = new Livro("Livro", "Autor Antigo", "978-1-234-56789-0", 2000);
        
        livro.autor = "Autor Novo";
        
        expect(livro.autor).toBe("Autor Novo");
    });

    it("Deve alterar o ISBN do livro", () => {
        const livro = new Livro("Livro", "Autor", "978-1-234-56789-0", 2000);
        
        livro.isbn = "978-9-876-54321-0";
        
        expect(livro.isbn).toBe("978-9-876-54321-0");
    });

    it("Deve alterar o ano de publicação", () => {
        const livro = new Livro("Livro", "Autor", "978-1-234-56789-0", 2000);
        
        livro.anoPublicacao = 2024;
        
        expect(livro.anoPublicacao).toBe(2024);
    });

    it("Deve marcar o livro como indisponível", () => {
        const livro = new Livro("Livro", "Autor", "978-1-234-56789-0", 2000);
        
        livro.disponivel = false;
        
        expect(livro.disponivel).toBe(false);
    });

    it("Deve marcar o livro como disponível", () => {
        const livro = new Livro("Livro", "Autor", "978-1-234-56789-0", 2000, false);
        
        livro.disponivel = true;
        
        expect(livro.disponivel).toBe(true);
    });
});