import mongoose from 'mongoose';
import { NoticiaEsquema } from '../modelos/noticiaEsquema';

const NoticiaRepositorio = mongoose.model('noticias', NoticiaEsquema);

export { NoticiaRepositorio };