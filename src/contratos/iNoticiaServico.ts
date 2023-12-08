import { Resultado } from "../infra/resultado";

export interface INoticiaServico {
    get(id: String): any;
    getAll(pagina: number, qtd: number): Promise<Resultado>;
}