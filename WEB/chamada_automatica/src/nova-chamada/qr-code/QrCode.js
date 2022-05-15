import { QRCode } from 'react-qrcode-logo';
import * as React from 'react'

const url = "https://api.hashify.net/hash/sha256/hex?value="
const code = "CP500TIN2-03052022-1900"

export default function QrCode(){
    const [hash, setHash] = React.useState(); 

    const funcaoAssync = async () => {
      const string = url.concat(code)
      const resultado = await fetch(string);
      const json = await resultado.json();
  
      setHash(json.Digest)
      };
    React.useEffect(() => { funcaoAssync(); }, []);
    return(
        <QRCode value={hash}/>
    )
}