import axios from 'axios'
import React from 'react'
import { url } from '../../../api-url.js'

export default function Update() {
	function update(){
		axios.get(`${url}/alunos`)
    .then((response)=>{
			response.data.forEach(element => {
				let check = document.getElementById(element.ra)
				axios.put(`${url}/alunos/presenca`,{
						"ra": element.ra,
						"qrcode": "decodedText",
						"presenca": check.checked
					})
				.then((response)=>{
				})
			});
    })
	}

	return (
		<>
		<div onClick={update}>Request</div>
		</>
	)
}