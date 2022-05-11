import './NovaChamada.css';
import QrCode from './qr-code/QrCode';

import { AiOutlineUser, AiOutlineSolution } from "react-icons/ai"


export default function NovaChamada() {
    return (
        <>
            <header>
                <div id="cabecalho">
                    <div className="titulo">
                        <p >Chamada Automática</p>
                    </div>
                    <div id="iconeLista">
                        <AiOutlineSolution />
                    </div>
                </div>

                <div className="menu">
                    <div id="ra">
                        <p >200738</p>
                    </div>
                    <div id="iconeUsuario">
                        <AiOutlineUser />
                    </div>
                </div>
            </header>
            <body>
                <div className="container">
                    <section className="info">
                        <p>Use a câmera do celular para ler o QR code e garantir sua presença na aula</p>
                    </section>
                    <section className="qrCode">
                        < QrCode />
                    </section>
                </div>
            </body>
            <footer>
                <p id="tituloFooter">Chamada Automática</p>
                <p className="descricao">Este projeto tem como foco otimizar o tempo de aula por meio de uma chamada mais rápida para que a quantidade de alunos não interfira no tempo para ela ser feita. Dessa forma é possível ter uma aula mais produtiva.</p>
                <p>Engenharia de computação UPX5</p>
                <p>&copy; all rights reserved 2022</p>
            </footer>
        </>


    )
}