import mongoose from "mongoose";

const professorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        materia: {type: String}
    },
    {
        versionKey: false
    }
)

const professores = mongoose.model("professores", professorSchema)

export default professores;