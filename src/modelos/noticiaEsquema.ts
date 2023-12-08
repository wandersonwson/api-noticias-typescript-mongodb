import { Schema } from 'mongoose';

export const NoticiaEsquema = new Schema({
    titulo: String,
    chapeu: String,
    texto: String,
    autor: String,
    imagem: String,
    dataPublicacao: Date,
    tags: String,
    link: String,
    ativo: Boolean
});