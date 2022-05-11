import express from "express";
import AlunoController from "../controllers/alunosController.js";

const router = express.Router();

router
    .get("/alunos", AlunoController.listarAlunos)
    .get("/alunos/busca", AlunoController.listarAlunoPorCurso)
    .get("/alunos/:id", AlunoController.listarAlunoPorId)
    .post("/alunos", AlunoController.cadastrarAluno)
    .put("/alunos/:id", AlunoController.atualizarAluno)
    .delete("/alunos/:id", AlunoController.excluirAluno)

export default router;