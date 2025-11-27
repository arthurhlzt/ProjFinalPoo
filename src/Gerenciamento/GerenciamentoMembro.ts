import axios, { AxiosInstance } from 'axios';
import Membro from '../Class/Membro';
import http from "http";

export default class GerenciamentoMembro {
    private api: AxiosInstance;
    private readonly baseURL: string = 'http://localhost:3000/membros';
    constructor() {
        this.api = axios.create({
            baseURL: this.baseURL,
            httpAgent: new http.Agent({ keepAlive: false }),
            timeout: 5000
        });
    }
    public async listarMembros(): Promise<Membro[]> {
        const response = await this.api.get<Membro[]>(this.baseURL);
        return response.data.map(item => new Membro(item.nome, item.endereco, item.telefone, item.nrMatricula, item.id));
    }

    public async adicionarMembro(membro: Membro): Promise<Membro> {
        const response = await this.api.post<Membro>(this.baseURL, {
            nome: membro.nome,
            endereco: membro.endereco,
            telefone: membro.telefone,
            nrMatricula: membro.nrMatricula
        });
        const data = response.data;
        return new Membro(data.nome, data.endereco, data.telefone, data.nrMatricula, data.id);
    }
    public async atualizarMembro(id: string, Dadosatt: any): Promise<Membro> {
        const response = await this.api.patch<Membro>(`${this.baseURL}/${id}`, Dadosatt);
        const data = response.data;
        return new Membro(data.nome, data.endereco, data.telefone, data.nrMatricula, data.id);
    }
    public async deletarMembro(id: string): Promise<void> {
        await this.api.delete(`${this.baseURL}/${id}`);
    }
}