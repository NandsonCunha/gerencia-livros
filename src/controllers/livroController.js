import { Livro } from '../models/livroModel.js' 

export class LivroClass {

    static async criarLivro(req, res){
        try {
            const {
                titulo,
                autor,
                genero,
                preco,
                quantidadeestoque
            } = req.body;
    
            const livro = await Livro.create({
                titulo,
                autor,
                genero,
                preco,
                quantidadeestoque
            })
            return res.status(201).json(livro)
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar livro.' });
        }
    };
    
    static async listarLivros(req, res) {
        try {
            const livros = await Livro.findAll();
            res.json(livros);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar livros.' });
        }
    };
    
    static async editarLivro(req, res) {
        try {
            const {id} = req.params;
            const livro = await Livro.findOne({where: {id : id}});
    
            if (!livro) {
                return res.status(404).json({ message: 'Livro não encontrado.' });
            }
    
            if (req.body?.titulo) {
                livro.titulo = req.body.titulo;
            }
            if (req.body?.autor) {
                livro.autor = req.body.autor;
            }
            if (req.body?.genero) {
                livro.genero = req.body.genero;
            }
            if (req.body?.preco) {
                livro.preco = req.body.preco;
            }
            if (req.body?.quantidadeestoque) {
                livro.quantidadeestoque = req.body.quantidadeestoque;
            }
            await livro.save();
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao editar livro.' });
        }
    };
    
    static async excluirLivro(req, res) {
        try {
            const {id} = req.params;
            const livro = await Livro.findOne({where: {id : id}});
            if (!livro) {
                return res.status(404).json({ message: 'Livro não encontrado.' });
            }
            await livro.destroy();
            res.json({ message: 'Livro excluído com sucesso.' });
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir livro.' });
        }
    };

}
