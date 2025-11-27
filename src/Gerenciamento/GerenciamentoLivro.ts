import axios, { AxiosInstance } from 'axios';
import http from "http";
import Livro from '../Class/Livro';

export default class GerenciamentoLivro {
    private api: AxiosInstance;
    private readonly baseURL: string = 'http://localhost:3000/livros';

    constructor() {
        this.api = axios.create({
            baseURL: this.baseURL,
            httpAgent: new http.Agent({ keepAlive: false }),
            timeout: 5000
        });
    }    

    public async listarLivros(): Promise<Livro[]> {
        const response = await this.api.get<Livro[]>(this.baseURL);
        return response.data.map(item => new Livro(
            item.titulo,
            item.autor,
            item.isbn,
            item.anoPublicacao,
            item.disponivel,
            item.id
        ));
    }
    public async adicionarLivro(livro: Livro): Promise<Livro> {
        const response = await this.api.post<Livro>(this.baseURL, {
            titulo: livro.titulo,
            autor: livro.autor,
            isbn: livro.isbn,
            anoPublicacao: livro.anoPublicacao,
            disponivel: livro.disponivel
        });
        const data = response.data;
        return new Livro(
            data.titulo,
            data.autor,
            data.isbn,
            data.anoPublicacao,
            data.disponivel,
            data.id
        );
    }
    public async atualizarLivro(id: string, Dadosatt: any): Promise<Livro> {
        const response = await this.api.patch<Livro>(`${this.baseURL}/${id}`, Dadosatt);
        const data = response.data;
        return new Livro(
            data.titulo,
            data.autor,
            data.isbn,
            data.anoPublicacao,
            data.disponivel,
            data.id
        );
    }
    public async deletarLivro(id: string): Promise<void> {
        await this.api.delete(`${this.baseURL}/${id}`);
    }
    }