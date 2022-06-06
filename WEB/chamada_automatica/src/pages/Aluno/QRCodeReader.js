import { Html5Qrcode } from "html5-qrcode"
import React from "react";
import axios from 'axios'

//const url = 'http://localhost:3080'
const url = 'https://72cc-2804-90-5000-5a4e-1d0-2f5c-bb64-babe.sa.ngrok.io'

function QRCodeReader() {
  function callApi(ra, decodedText){
    axios.put(`${url}/alunos/presenca`,{
      	"ra": ra,
      	"qrcode": decodedText
      })
    .then((response)=>{
      //window.alert("foi")
    })
  }
  function testeGET(){
    axios.get(`${url}/`)
    .then((response)=>{
      console.log(response)
    })
  }
  function testePOST(){
    let email = document.getElementById("email").value
    var array = email.split("@")
    let ra = array[0]

    axios.post(`${url}/alunos/presenca`,{
      	"ra": ra,
      	"qrcode": "decodedText"
      })
    .then((response)=>{
      console.log(response)
    })
  }
  function testePUT(){
    let email = document.getElementById("email").value
    var array = email.split("@")
    let ra = array[0]

    axios.put(`${url}/alunos/presenca`,{
      	"ra": ra,
      	"qrcode": "decodedText"
      })
    .then((response)=>{
      console.log(response)
    })
  }
	function scan(){
		Html5Qrcode.getCameras().then(devices => {
			var cameraId = 0
			if (devices && devices.length) {
				devices.forEach(device => {
					var string = device.label.toString()
					var array = string.split(", ")
          if(array[1] === "facing back"){
						cameraId = device.id;
					}
				});
			
				const html5QrCode = new Html5Qrcode("reader");
				html5QrCode.start(
					cameraId, 
					{
						fps: 10,
						qrbox: { width: 250, height: 250 }
					},
					(decodedText, decodedResult) => {
						let email = document.getElementById("email").value
            var array = email.split("@")
            let ra = array[0]
						console.log(`${email} -> ${ra}, com o código ${decodedText}`);

            callApi(ra, decodedText)

            html5QrCode.stop().then((ignore) => {
              // QR Code scanning is stopped.
            }).catch((err) => {
              // Stop failed, handle it.
            });
					},
					(errorMessage) => {
						console.warn(`Code scan error = ${errorMessage}`);
					})
				.catch((err) => {
					console.error(`Code scan error = ${err}`);
				});
			}
		}).catch(err => {
			console.error(`Camera error = ${err}`);
		});
	}
  return (
    <div style={{width: "500px", border: "white 2px"}} id="reader">
			<button onClick={scan}>Escanear QRCode</button>
      <button onClick={testeGET}>Testar GET</button>
      <button onClick={testePOST}>Testar POST</button>
      <button onClick={testePUT}>Testar PUT</button>
		</div>
  );
}

export default QRCodeReader;
