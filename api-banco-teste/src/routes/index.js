import express from "express";
import alunos from "./alunosRoute.js"
import professores from "./professoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({nome: "API Chamada"})
    })

    app.use(
        express.json(),
        alunos,
        professores
    )
}

export default routes