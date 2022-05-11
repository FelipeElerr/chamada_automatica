import express from "express";
import ProfessorController from "../controllers/professoresController.js";

const router = express.Router();

router
    .get("/professores", ProfessorController.listarProfessores)
    .get("/professores/:id", ProfessorController.listarProfessorPorId)
    .post("/professores", ProfessorController.cadastrarProfessor)
    .put("/professores/:id", ProfessorController.atualizarProfessor)
    .delete("/professores/:id", ProfessorController.excluirProfessor)

export default router;