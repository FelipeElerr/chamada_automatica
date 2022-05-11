import professores from "../models/professor.js"

class ProfessorController {
    
    static listarProfessores = (req, res) => {
        professores.find((err, professores) => {
            res.status(200).json(professores)
        })
    }

    static listarProfessorPorId = (req, res) => {
        const id = req.params.id;

        professores.findById(id, (err, professores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do professor não localizado.`})
            }
            else{
                res.status(200).send(professores);
            }
        })
    }

    static cadastrarProfessor = (req, res) => {
        let professor = new professores(req.body);

        professor.save((err) => {

            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar professor.`})
            } 
            else {
                res.status(201).send(professor.toJSON())
            }
        })

    }

    static atualizarProfessor = (req, res) => {
        const id = req.params.id;

        professores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Professor atualizado com sucesso!'})
            }
            else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirProfessor = (req, res) => {
        const id = req.params.id;

        professores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Professor removido com sucesso!'})
            }
            else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default ProfessorController