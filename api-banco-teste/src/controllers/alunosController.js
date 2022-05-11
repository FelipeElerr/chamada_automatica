import alunos from "../models/Aluno.js"

class AlunoController {
    
    static listarAlunos = (req, res) => {
        alunos.find()
            .populate('professor')
            .exec((err, alunos) => {
            res.status(200).json(alunos)
        })
    }

    static listarAlunoPorId = (req, res) => {
        const id = req.params.id;

        alunos.findById(id) 
        .populate('professor', 'nome')
        .exec((err, alunos) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do aluno não localizado.`})
            }
            else{
                res.status(200).send(alunos);
            }
        })
    }

    static cadastrarAluno = (req, res) => {
        let aluno = new alunos(req.body);

        aluno.save((err) => {

            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar aluno.`})
            } 
            else {
                res.status(201).send(aluno.toJSON())
            }
        })

    }

    static atualizarAluno = (req, res) => {
        const id = req.params.id;

        alunos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Aluno atualizado com sucesso!'})
            }
            else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAluno = (req, res) => {
        const id = req.params.id;

        alunos.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Aluno removido com sucesso!'})
            }
            else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarAlunoPorCurso = (req, res) => {
        const curso = req.query.curso

        alunos.find({'curso': curso}, {}, (err, alunos) => {
          res.status(200).send(alunos);  
        })
    }

}

export default AlunoController