import mongoose from 'mongoose';
import { NoticiaEsquema } from '../modelos/noticiaEsquema';

export const NoticiaRepositorio = mongoose.model('noticias', NoticiaEsquema);