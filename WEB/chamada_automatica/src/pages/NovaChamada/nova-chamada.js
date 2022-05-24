import QrCode from "./QrCode/qr-code";
import './nova-chamada.css';
import { AiOutlineUser, AiOutlineSolution } from "react-icons/ai"
import * as React from 'react'

export default function NovaChamada() {
	const chamaAPI = async () => {
		const resultado = await fetch("http://localhost:3001/");
		const json = await resultado.json();
		console.log(json)
	};
	
	React.useEffect(() => { chamaAPI(); }, []);
	return (
		<>
			<header>
				<div id="cabecalho">
					<div className="titulo">
						<p>Chamada Automática</p>
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
            <article>
                <div className="container">
                    <section className="info">
                        <p>Use a câmera do celular para ler o QR code e garantir sua presença na aula</p>
                    </section>
                    <section className="qrCode">
                        <QrCode />
                    </section>
										<button onClick={chamaAPI}>Teste API</button>
                </div>
            </article>
            <footer>
                <p id="tituloFooter">Chamada Automática</p>
                <p className="descricao">Este projeto tem como foco otimizar o tempo de aula por meio de uma chamada mais rápida para que a quantidade de alunos não interfira no tempo para ela ser feita. Dessa forma é possível ter uma aula mais produtiva.</p>
                <p>Engenharia de computação UPX5</p>
                <p>&copy; all rights reserved 2022</p>
            </footer>
        </>


    )
}