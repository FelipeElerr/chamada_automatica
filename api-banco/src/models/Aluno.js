import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        semestre: {type: Number},
        curso: {type: String, required: true},
        professor: {type: mongoose.Schema.Types.ObjectId, ref: 'professores', required: true}
    }
);

const alunos = mongoose.model('alunos', alunoSchema);

export default alunos;