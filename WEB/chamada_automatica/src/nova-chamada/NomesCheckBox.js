import './NomesCheckBox.css';

export default function NomesCheckBox(){
    return(
        <>
            <div className="checkbox">

            <input type="checkbox" id="nomeAs" name="As" value="AS"/>
            <label for="nomeAs"> Alex Shoiti </label><br/>
            <input type="checkbox" id="nomeFE" name="FE" value="FE"/>
            <label for="nomeFE"> Felipe Eler</label><br/>
            <input type="checkbox" id="nomeFV" name="FV" value="FV"/>
            <label for="nomeFV"> Felipe Victorino</label><br/>
            <input type="checkbox" id="nomeGM" name="GM" value="GM"/>
            <label for="nomeGM"> Gabriel Mancio</label><br/>
            <input type="checkbox" id="nomeLC" name="LC" value="LC"/>
            <label for="nomeLC"> Laura Cecília </label><br/>
            <input type="checkbox" id="nomeMP" name="MP" value="MP"/>
            <label for="nomeMP"> Matheus Patriarca </label><br/>
            <input type="checkbox" id="nomeRL" name="RL" value="RL"/>
            <label for="nomeRL"> Rafael Lavagnini</label>

            </div>






        </>
    )
}