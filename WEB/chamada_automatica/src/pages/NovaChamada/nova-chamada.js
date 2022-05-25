import QrCode from "./QrCode/qr-code";
import './nova-chamada.css';
import * as React from 'react'
import Header from '../../componentes/Header/header'
import Footer from '../../componentes/Footer/footer'

export default function NovaChamada() {
	const chamaAPI = async () => {
		const resultado = await fetch("http://localhost:3001/");
		const json = await resultado.json();
		console.log(json)
	};
	
	React.useEffect(() => { chamaAPI(); }, []);
	return (
		<>
			<Header />
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
			<Footer />
            
        </>


    )
}