import React from "react";
import {Character} from "../model/Character";
import {Link, useParams} from "react-router-dom";
import "../css_components/CharacterCard.css";
import "../css_components/CharacterCardDetails.css";


type CharacterCardDetailsProps = {

    characters: Character[]

}


export default function CharacterCardDetails(props: CharacterCardDetailsProps) {
    const params = useParams()
    const id: string | undefined = params.id;
    if (!id) {
        return <div>ID is undefined</div>
    }

    const foundCharacter: Character | undefined = props.characters.find((found) => (found.id === parseInt(id)))
    if (!foundCharacter) {
        return <div className={"character-details"}>
            <div>
                <p>Character not fetched yet</p>
                <Link to={"/"}>Back To Home</Link>
            </div>
        </div>;
    }


    return (
        <>
            <div className={"character-details"}>
                <div className={"character-card"}>
                    <h5>{foundCharacter?.name}</h5>
                    <img src={foundCharacter?.image} alt={"character"}/>
                    <p>Id:{foundCharacter?.id} Status: {foundCharacter?.status}</p>
                    <p>Origin:{" "+foundCharacter?.origin.name}</p>
                    <p>{foundCharacter?.species}</p>
                    <Link to={"/characters"}>Back To Gallery</Link>
                </div>
            </div>
        </>
    )
}