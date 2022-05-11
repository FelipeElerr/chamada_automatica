import './NovaChamada.css';
import { AiOutlineUser } from "react-icons/ai"
export default function NovaChamada() {
    return (
        <>
            <header>
                <div className="titulo">
                    <p >Chamada Automática</p>
                </div>
                <div className="menu">
                    <div className="ra">
                        <p >200738</p>
                    </div>
                    <div class="iconeUsuario">
                        <AiOutlineUser />
                    </div>
                </div>
            </header>
            <body>
                <div className="container">
                    <section className="info">
                        <p>Use a câmera do celular para ler o QR code e conseguir sua presença na aula</p>
                    </section>
                    <section className="qrCode">
                        <p>LER QR CODE</p>
                    </section>
                </div>
            </body>
            <footer>
                <p id >Chamada Automática</p>
                <p className="descricao">Este projeto tem como foco otimizar o tempo de aula por meio de uma chamada mais rápida para que a quantidade de alunos não interfira no tempo para ela ser feita. Dessa forma é possível ter uma aula mais produtiva.</p>
                <p>Engenharia de computação UPX5</p>
                <p>&copy; all rights reserved 2022</p>
            </footer>
        </>


    )
}