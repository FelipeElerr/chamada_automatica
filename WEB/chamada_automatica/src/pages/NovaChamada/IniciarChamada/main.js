import React from "react";
import { Link } from "react-router-dom";
import './main.css'
import Header from '../../../componentes/Header/header'
import Footer from '../../../componentes/Footer/footer'


function Main() {
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
                        <li>Alex Shoiti</li>
                        <li>Felipe Eler</li>
                        <li>Felipe Victorino</li>
                        <li>Gabriel Mancio</li>
                        <li>Laura Cecília</li>
                        <li>Matheus Patriarca</li>
                        <li>Rafael Lavagnini</li>
                    </ul>
                </section>

                <section className="gerarQrCode">
                    <Link to="/nova-chamada" className="Link" id="formatacao">Gerar Qr Code</Link>
                </section>

            </article>
            <Footer />
        </>

    )
}

export default Main
