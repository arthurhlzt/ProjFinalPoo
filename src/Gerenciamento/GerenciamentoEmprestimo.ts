import axios, { AxiosInstance } from 'axios';
import http from "http";
import Emprestimo from '../Class/Emprestimo';

export default class GerenciamentoEmprestimo {
    private api: AxiosInstance;
    private readonly baseURL: string = 'http://localhost:3000/emprestimos';
    constructor() {
        this.api = axios.create({
            baseURL: this.baseURL,
            httpAgent: new http.Agent({ keepAlive: false }),
            timeout: 5000
        });
    }    
    
    
    public async adicionarEmprestimo(emprestimo: Emprestimo): Promise<Emprestimo> {
        const response = await this.api.post<Emprestimo>(this.baseURL, {
            idLivro: emprestimo.livro,
            idMembro: emprestimo.membro,
            dataEmprestimo: emprestimo.dataEmprestimo,
            dataDevolucao: emprestimo.dataDevolucao
        });
        const item = response.data;
        return new Emprestimo(
            item.livro,
            item.membro,
            item.dataEmprestimo ? new Date(item.dataEmprestimo) : new Date(),
            item.dataDevolucao ? new Date(item.dataDevolucao) : null,
            item.id
        );
    }
    
    public async deletarEmprestimo(id: string): Promise<void> {
        await this.api.delete(`${this.baseURL}/${id}`);
    }

    public async buscarEmprestimoPorId(id: string): Promise<Emprestimo | null> {
        try {
            const response = await this.api.get<Emprestimo>
            (`${this.baseURL}/${id}`);
            const item = response.data;
            return new Emprestimo(
                item.livro,
                item.membro,
                item.dataEmprestimo ? new Date(item.dataEmprestimo) : new Date(),
                item.dataDevolucao ? new Date(item.dataDevolucao) : null,
                item.id
            );
        } catch (error) {
            return null;
        }
    }

    public async listarEmprestimos(): Promise<Emprestimo[]> {
        const response = await this.api.get<Emprestimo[]>(this.baseURL);
        return response.data.map(item => new Emprestimo(
            item.livro,
            item.membro,
            item.dataEmprestimo ? new Date(item.dataEmprestimo) : new Date(),
            item.dataDevolucao ? new Date(item.dataDevolucao) : null,
            item.id
        ));
    }

    public async atualizarEmprestimo(id: string, Dadosatt: any): Promise<Emprestimo> {
        const response = await this.api.patch<Emprestimo>(`${this.baseURL}/${id}`, Dadosatt);
        const item = response.data;
        return new Emprestimo(
            item.livro,
            item.membro,
            item.dataEmprestimo ? new Date(item.dataEmprestimo) : new Date(),
            item.dataDevolucao ? new Date(item.dataDevolucao) : null,
            item.id
        );
    }
}