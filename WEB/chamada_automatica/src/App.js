import './App.css';
import { QRCode } from 'react-qrcode-logo';
import * as React from 'react'

const url = "https://api.hashify.net/hash/sha256/hex?value="
const code = "CP500TIN2-03052022-1900"

function App() {
  const [hash, setHash] = React.useState(); 

  const funcaoAssync = async () => {
    const string = url.concat(code)
    const resultado = await fetch(string);
    const json = await resultado.json();

    //JSON.parse(document.getElementById("a").innerHTML).Digest
    setHash(json.Digest)
	};
  React.useEffect(() => { funcaoAssync(); }, []);

  return (
    <div className="App">
      <QRCode value={hash}/>
    </div>
  );
}

export default App;
