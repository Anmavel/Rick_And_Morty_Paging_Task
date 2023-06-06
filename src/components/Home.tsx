import "../css_components/Home.css"
import "../css_components/GalleryButtons.css"
import {useNavigate} from "react-router-dom";
export default function Home(){
    const navigate= useNavigate()
    function handleClickStart() {
        navigate("/characters")
    }

    return (
        <div className={"home"}>
            <p>Dieses Projekt war eine Übung im Bootcamp und verwendet die Rick and Morty API. Es ruft Informationen zu den Charakteren und Episoden ab. Es wurde eine Suchfunktion implementiert, um einen Charakter anhand seines Namens oder seines Status (dead or alive) auszuwählen. Klicke auf 'Start', um zur Charakter-Galerie zu gelangen, oder im Menü kannst du die Episoden-Galerie auswählen.</p>
            <button onClick={handleClickStart}>Start</button>
        </div>

    )
}