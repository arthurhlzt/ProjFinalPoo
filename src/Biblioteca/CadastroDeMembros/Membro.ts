import { Pessoa } from "./Pessoa";

export class Membro extends Pessoa {
    private _numeroDeMatricula: string = "";
    
    // Array estático para armazenar todos os membros cadastrados
    private static membrosCadastrados: Membro[] = [];

    constructor(nome: string, telefone: number, endereco: string, numeroDeMatricula: string) {
        super(nome, telefone, endereco);
        this._numeroDeMatricula = numeroDeMatricula;
    }

    // Getter e Setter
    public get numeroDeMatricula(): string {
        return this._numeroDeMatricula;
    }

    public set numeroDeMatricula(nr: string) {
        this._numeroDeMatricula = nr;
    }

    // Métodos CRUD
    public cadastrar(): void {
        // Verifica se já existe
        if (Membro.buscarPorMatricula(this._numeroDeMatricula)) {
            throw new Error(`Membro com matrícula ${this._numeroDeMatricula} já cadastrado.`);
        }
        // Adiciona ao array
        Membro.membrosCadastrados.push(this);
        console.log(`Membro "${this._nome}" cadastrado com sucesso!`);
    }

    // Métodos de consulta
    public static listarTodos(): Membro[] {
        return [...Membro.membrosCadastrados];
    }

    public static buscarPorMatricula(numeroDeMatricula: string): Membro | undefined {
        return Membro.membrosCadastrados.find(m => m.numeroDeMatricula === numeroDeMatricula);
    }

    public static exibirLista(): void {
        const membros = Membro.listarTodos();
        if (membros.length === 0) {
            console.log('Nenhum membro cadastrado.');
            return;
        }
        
        console.log('\n=== Membros Cadastrados ===');
        for (let i = 0; i < membros.length; i++) {
            console.log(`\n${i + 1}. ${membros[i].nome}`);
            console.log(`   Telefone: ${membros[i].telefone}`);
            console.log(`   Endereço: ${membros[i].endereco}`);
            console.log(`   Matrícula: ${membros[i].numeroDeMatricula}`);
        }
    }

    public atualizar(novosDados: { nome?: string; telefone?: number; endereco?: string }): void {
        // Atualiza apenas os campos fornecidos
        if (novosDados.nome) this.nome = novosDados.nome;
        if (novosDados.telefone) this.telefone = novosDados.telefone;
        if (novosDados.endereco) this.endereco = novosDados.endereco;
        console.log(`Membro "${this._nome}" atualizado com sucesso!`);
    }
    
    public remover(): void {
        const quantidadeInicial = Membro.membrosCadastrados.length;
        // Remove pela matrícula
        Membro.membrosCadastrados = Membro.membrosCadastrados.filter(m => m.numeroDeMatricula !== this._numeroDeMatricula);
        // Verifica se removeu
        if (Membro.membrosCadastrados.length === quantidadeInicial) {
            throw new Error(`Membro com matrícula ${this._numeroDeMatricula} não encontrado.`);
        }
        console.log(`Membro "${this._nome}" removido com sucesso!`);
    }
}