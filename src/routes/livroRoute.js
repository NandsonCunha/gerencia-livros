import { Router } from 'express';
const routerLivro = Router();
import { LivroClass } from '../controllers/livroController.js';


routerLivro.get('/livros', LivroClass.listarLivros);
routerLivro.post('/livros', LivroClass.criarLivro);
routerLivro.put('/livros/:id', LivroClass.editarLivro);
routerLivro.delete('/livros/:id', LivroClass.excluirLivro);


export default routerLivro;