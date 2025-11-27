import Livro from "./src/Class/Livro";
import Membro from "./src/Class/Membro";
import Emprestimo from "./src/Class/Emprestimo";
import GerenciamentoLivro from "./src/Gerenciamento/GerenciamentoLivro";
import GerenciamentoMembro from "./src/Gerenciamento/GerenciamentoMembro";
import GerenciamentoEmprestimo from "./src/Gerenciamento/GerenciamentoEmprestimo";
import Prompt from "prompt-sync";

const teclado = Prompt();

const gerenciamentoMembro = new GerenciamentoMembro();

async function listarMembros() {
    console.log("\n=== Lista de Membros ===");
    const membros = await gerenciamentoMembro.listarMembros();
    if (membros.length === 0) {
        console.log("Nenhum membro cadastrado.");
    } else {
        membros.forEach((membro: Membro) => membro.listarMembro());
    }
}

async function atualizarMembro() {
    console.log("\n=== Atualizar Membro ===");
    const id = teclado("ID do membro: ");

    const membros = await gerenciamentoMembro.listarMembros();
    const membroExistente = membros.find((m: Membro) => m.id === id);

    if (!membroExistente) {
        console.log("✗ Membro não encontrado!");
        return;
    }

    console.log("\nDeixe em branco para manter o valor atual:");
    const nome = teclado("Nome: ");
    const endereco = teclado("Endereço: ");
    const telefone = teclado("Telefone: ");
    const nrMatricula = teclado("Matrícula: ");

    const dadosAtt = {
        nome: nome.trim() || membroExistente.nome,
        endereco: endereco.trim() || membroExistente.endereco,
        telefone: telefone.trim() || membroExistente.telefone,
        nrMatricula: nrMatricula.trim() || membroExistente.nrMatricula
    };

    await gerenciamentoMembro.atualizarMembro(id, dadosAtt);
    console.log("✓ Membro atualizado com sucesso!");
}

async function deletarMembro() {
    console.log("\n=== Deletar Membro ===");
    const id = teclado("ID do membro: ");

    if (!id.trim()) {
        console.log("✗ Erro: ID é obrigatório!");
        return;
    }

    await gerenciamentoMembro.deletarMembro(id);
    console.log("✓ Membro deletado com sucesso!");
}

async function adicionarMembro() {
    console.log("\n=== Adicionar Membro ===");
    const nome = teclado("Nome: ");
    const endereco = teclado("Endereço: ");
    const telefone = teclado("Telefone: ");
    const nrMatricula = teclado("Número de matrícula: ");

    if (!nome.trim() || !endereco.trim() || !telefone.trim() || !nrMatricula.trim()) {
        console.log("✗ Erro: Todos os campos são obrigatórios!");
        return;
    }

    const novoMembro = new Membro(nome.trim(), endereco.trim(), telefone.trim(), nrMatricula.trim());
    const membroAdicionado = await gerenciamentoMembro.adicionarMembro(novoMembro);
    console.log("✓ Membro adicionado com sucesso! ID:", membroAdicionado.id);
}

const gerenciamentoLivro = new GerenciamentoLivro();

async function adicionarLivro() {
    console.log("\n=== Adicionar Livro ===");
    const titulo = teclado("Título: ");
    const autor = teclado("Autor: ");
    const isbn = teclado("ISBN: ");
    const anoPublicacao = teclado("Ano de Publicação: ");
    const statusDisponivel = teclado("Disponível? (s/n): ");

    if (!titulo.trim() || !autor.trim() || !isbn.trim() || !anoPublicacao.trim()) {
        console.log("✗ Erro: Título, Autor, ISBN e Ano são obrigatórios!");
        return;
    }

    const disponivel = statusDisponivel.trim().toLowerCase() === 's';
    const novoLivro = new Livro(titulo.trim(), autor.trim(), isbn.trim(), parseInt(anoPublicacao), disponivel);
    const livroAdicionado = await gerenciamentoLivro.adicionarLivro(novoLivro);
    console.log("✓ Livro adicionado com sucesso! ID:", livroAdicionado.id);
}

async function listarLivros() {
    console.log("\n=== Lista de Livros ===");
    const livros = await gerenciamentoLivro.listarLivros();
    if (livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
    } else {
        livros.forEach((livro: Livro) => livro.listarLivro());
    }
}

async function deletarLivro() {
    console.log("\n=== Deletar Livro ===");
    const id = teclado("ID do livro: ");

    if (!id.trim()) {
        console.log("✗ Erro: ID é obrigatório!");
        return;
    }

    await gerenciamentoLivro.deletarLivro(id);
    console.log("✓ Livro deletado com sucesso!");
}

async function atualizarLivro() {
    console.log("\n=== Atualizar Livro ===");
    const id = teclado("ID do livro: ");

    const livros = await gerenciamentoLivro.listarLivros();
    const livroExistente = livros.find((l: Livro) => l.id === id);

    if (!livroExistente) {
        console.log("✗ Livro não encontrado!");
        return;
    }

    console.log("\nDeixe em branco para manter o valor atual:");
    const titulo = teclado("Título: ");
    const autor = teclado("Autor: ");
    const isbn = teclado("ISBN: ");
    const anoPublicacao = teclado("Ano: ");
    const statusDisponivel = teclado("Disponível? (s/n): ");

    const dadosAtt = {
        titulo: titulo.trim() || livroExistente.titulo,
        autor: autor.trim() || livroExistente.autor,
        isbn: isbn.trim() || livroExistente.isbn,
        anoPublicacao: anoPublicacao.trim() ? parseInt(anoPublicacao) : livroExistente.anoPublicacao,
        disponivel: statusDisponivel.trim() ? statusDisponivel.trim().toLowerCase() === 's' : livroExistente.disponivel
    };

    await gerenciamentoLivro.atualizarLivro(id, dadosAtt);
    console.log("✓ Livro atualizado com sucesso!");
}

const gerenciamentoEmprestimo = new GerenciamentoEmprestimo();

function converterData(dataStr: string): Date {
    const partes = dataStr.split('-');
    const dia = parseInt(partes[0]!);
    const mes = parseInt(partes[1]!) - 1;
    const ano = parseInt(partes[2]!);
    return new Date(ano, mes, dia);
}

async function adicionarEmprestimo() {
    console.log("\n=== Adicionar Empréstimo ===");
    const idLivro = teclado("ID do Livro: ");
    const idMembro = teclado("ID do Membro: ");
    const dataEmprestimo = teclado("Data de Empréstimo (dd-mm-aaaa): ");
    const dataDevolucao = teclado("Data de Devolução (dd-mm-aaaa ou Enter): ");

    if (!idLivro.trim() || !idMembro.trim() || !dataEmprestimo.trim()) {
        console.log("✗ Erro: ID do Livro, ID do Membro e Data são obrigatórios!");
        return;
    }

    const novoEmprestimo = new Emprestimo(
        idLivro.trim(),
        idMembro.trim(),
        converterData(dataEmprestimo.trim()),
        dataDevolucao.trim() ? converterData(dataDevolucao.trim()) : null
    );

    const emprestimoAdicionado = await gerenciamentoEmprestimo.adicionarEmprestimo(novoEmprestimo);
    console.log("✓ Empréstimo adicionado com sucesso! ID:", emprestimoAdicionado.id);
}

async function listarEmprestimos() {
    console.log("\n=== Lista de Empréstimos ===");
    const emprestimos = await gerenciamentoEmprestimo.listarEmprestimos();
    if (emprestimos.length === 0) {
        console.log("Nenhum empréstimo registrado.");
    } else {
        emprestimos.forEach((emprestimo: Emprestimo) => emprestimo.listarEmprestimo());
    }
}

async function deletarEmprestimo() {
    console.log("\n=== Deletar Empréstimo ===");
    const id = teclado("ID do empréstimo: ");

    if (!id.trim()) {
        console.log("✗ Erro: ID é obrigatório!");
        return;
    }

    await gerenciamentoEmprestimo.deletarEmprestimo(id);
    console.log("✓ Empréstimo deletado com sucesso!");
}

async function atualizarEmprestimo() {
    console.log("\n=== Atualizar Empréstimo ===");
    const id = teclado("ID do empréstimo: ");

    const emprestimo = await gerenciamentoEmprestimo.buscarEmprestimoPorId(id);
    if (!emprestimo) {
        console.log("✗ Empréstimo não encontrado!");
        return;
    }

    const dataDevolucao = teclado("Data de Devolução (dd-mm-aaaa ou Enter): ");
    const dadosAtt = {
        dataDevolucao: dataDevolucao.trim() ? converterData(dataDevolucao.trim()) : null
    };

    await gerenciamentoEmprestimo.atualizarEmprestimo(id, dadosAtt);
    console.log("✓ Empréstimo atualizado com sucesso!");
}

async function listarEmprestimosAtivos() {
    let emprestimos = await gerenciamentoEmprestimo.listarEmprestimos();
    const emprestimosAtivos = emprestimos.filter((e: Emprestimo) => !e.dataDevolucao || e.dataDevolucao === null);
    console.log("\n=== Lista de Empréstimos Ativos ===");
    if (emprestimosAtivos.length === 0) {
        console.log("Nenhum empréstimo ativo encontrado.");
    } else {
        emprestimosAtivos.forEach((emprestimo: Emprestimo) => {
            emprestimo.listarEmprestimo();
        });
    }
}

async function menu() {
    while (true) {
        console.log('\n══════════════════════════════════════════════');
        console.log('  SISTEMA DE GERENCIAMENTO DE BIBLIOTECA');
        console.log('══════════════════════════════════════════════');
        console.log("\n[1] Gerenciar Membros");
        console.log("[2] Gerenciar Livros");
        console.log("[3] Gerenciar Empréstimos");
        console.log("[0] Sair\n");

        const escolha = teclado("Opção: ");
        
        if (escolha === "0") {
            console.log("\n👋 Até logo!");
            break;
        }

        switch (escolha) {
            case "1":
                await menuMembros();
                break;
            case "2":
                await menuLivros();
                break;
            case "3":
                await menuEmprestimos();
                break;
            default:
                console.log("✗ Opção inválida!");
        }
    }
}

async function menuMembros() {
    while (true) {
        console.log('\n===========================================');
        console.log("   GERENCIAMENTO DE MEMBROS   ");
        console.log('===========================================');
        console.log("1. Listar Membros");
        console.log("2. Adicionar Membro");
        console.log("3. Atualizar Membro");
        console.log("4. Deletar Membro");
        console.log("0. Voltar ao Menu Principal");
        console.log('===========================================');
        const escolha = teclado("Escolha uma opção: ");
        if (escolha === "0") {
            break;
        }
        switch (escolha) {
            case "1":
                await listarMembros();
                break;
            case "2":
                await adicionarMembro();
                break;
            case "3":
                await atualizarMembro();
                break;
            case "4":
                await deletarMembro();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

async function menuLivros() {
    while (true) {
        console.log('\n===========================================');
        console.log("   GERENCIAMENTO DE LIVROS   ");
        console.log('===========================================');
        console.log("1. Listar Livros");
        console.log("2. Adicionar Livro");
        console.log("3. Atualizar Livro");
        console.log("4. Deletar Livro");
        console.log("0. Voltar ao Menu Principal");
        console.log('===========================================');
        const escolha = teclado("Escolha uma opção: ");
        if (escolha === "0") {
            break;
        }
        switch (escolha) {
            case "1":
                await listarLivros();
                break;
            case "2":
                await adicionarLivro();
                break;
            case "3":
                await atualizarLivro();
                break;
            case "4":
                await deletarLivro();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

async function menuEmprestimos() {
    while (true) {
        console.log('\n===========================================');
        console.log("   GERENCIAMENTO DE EMPRÉSTIMOS   ");
        console.log('===========================================');
        console.log("1. Listar Empréstimos");
        console.log("2. Adicionar Empréstimo");
        console.log("3. Atualizar Empréstimo");
        console.log("4. Deletar Empréstimo");
        console.log("5. Listar Empréstimos Ativos");
        console.log("0. Voltar ao Menu Principal");
        console.log('===========================================');
        const escolha = teclado("Escolha uma opção: ");
        if (escolha === "0") {
            break;
        }
        switch (escolha) {
            case "1":
                await listarEmprestimos();
                break;
            case "2":
                await adicionarEmprestimo();
                break;
            case "3":
                await atualizarEmprestimo();
                break;
            case "4":
                await deletarEmprestimo();
                break;
            case "5":
                await listarEmprestimosAtivos();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

menu();

