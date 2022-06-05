import React from "react";
import QRCodeReader from './QRCodeReader';

export default function Alunos(){
	return(
	<div className="App">
		<header className="App-header">
				<label htmlFor="email">E-mail</label>
				<input type="email" name="email" id="email" />

			<QRCodeReader />
				{/* <p>Usuário: {user?.login}</p>
				<p>Biografia: {user?.bio}</p> */}
		</header>
	</div>
	)
}