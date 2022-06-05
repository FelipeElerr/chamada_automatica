import React from "react";
import Header from "../../../../componentes/Header/header";
import Footer from "../../../../componentes/Footer/footer";
import { Link } from "react-router-dom";
import './alunos-presentes.css';
import Calcular from './Calcular';



export default function AlunosPresentes() {
    return (
        <>
            <Header />
            <article className="opcaoChamada" >
                <section className="novaChamada" id="formatacao">
                    <p>
                        Nova chamada
                    </p>
                </section>
                <section className="historicoChamada" id="formatacao">
                    <p>
                        Histórico de chamadas
                    </p>
                </section>
            </article>
            <article className="telaListaAlunos">
                <section className="sala" id="formatacao">
                    <p>
                        UP013TIN1
                    </p>
                </section>

                <section className="listaAlunos" id="formatacao" >
                    <ul >
                        <li>
                            <input type="checkbox" id="checkbox" name="alunos" value={200769}>
                            </input>
                            Alex Shoiti</li>
                        <li>
                            <input type="checkbox" id="checkbox" name="alunos" value={200835}>
                            </input>
                            Felipe Eler</li>
                        <li>
                            <input type="checkbox" id="checkbox" name="alunos" value={200721}>
                            </input>Felipe Victorino</li>
                        <li>
                            <input type="checkbox" id="checkbox" name="alunos" value={200154}>
                            </input>Gabriel Mancio</li>
                        <li>
                            <input type="checkbox" id="checkbox" name="alunos" value={200489}>
                            </input>Laura Cecília</li>
                        <li>
                            <input type="checkbox" id="checkbox" name="alunos" value={200358}>
                            </input>Matheus Patriarca</li>
                        <li>
                            <input type="checkbox" id="checkbox" name="alunos" value={200288}>
                            </input>Rafael Lavagnini</li>
                    </ul>
                </section>

                <section className="gerarQrCode">
                    <button className="calcular" id="formatacao">
                        <Calcular />
                    </button>
                </section>

                <section className="gerarQrCode">
                    <Link to="/" className="Link" id="formatacao">Finalizar</Link>
                </section>

            </article>
            <Footer />
        </>
    )
}