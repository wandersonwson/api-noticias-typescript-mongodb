import { INoticiaServico } from "../contratos/iNoticiaServico";
import { Resultado } from "../infra/resultado";
import { NoticiaRepositorio } from "../repositorios/noticiaRepositorio";

export class NoticiaServico implements INoticiaServico {
    async get(_id: String) {
        let resultado = await NoticiaRepositorio.findById(_id);
        return resultado;
    }
    async getAll(pagina: number, qtd: number): Promise<Resultado> {
        let resultado = new Resultado();
        resultado.Pagina = pagina;
        resultado.Qtd = qtd;
        resultado.Total = await NoticiaRepositorio.countDocuments({});
        resultado.Data = await NoticiaRepositorio.find({}).skip((pagina*qtd)-qtd).limit(qtd);
        return resultado;
    }
    
}