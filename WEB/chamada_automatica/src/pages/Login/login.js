import React from "react";
import Footer from "../../componentes/Footer/footer";
import { Link } from "react-router-dom";
import './login.css'

export default function Login() {
    return (
        <>
            <div className="centro">

                <section className="aluno">
                    <Link to="/alunos" className="Link" id="formatacao">Aluno</Link>
                </section>
                <section className="professor">
                    <Link to="/conferencia-alunos" className="Link" id="formatacao">Professsor</Link>
                </section>

            </div>
            <Footer />
        </>
    )
}