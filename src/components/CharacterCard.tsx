import React from "react";
import "../css_components/CharacterCard.css"
import {Character} from "../model/CharacterType";
import {useNavigate} from "react-router-dom";


type CharacterProp ={
    character: Character,
}

export default function CharacterCard(props:CharacterProp){
    const navigate =useNavigate()

    function onClick(){
        navigate("/characters/" +props.character.id)
    }

    return (
            <>
                <div className={"card"}>
                    <h3>{props.character.name}</h3>
                    <img src={props.character.image} height="130" width="124"/>
                    <p>Id:{props.character.id}  Status: {props.character.status}</p>
                    <p>Origin:{props.character.origin.name}</p>
                    <button onClick={onClick}>  DETAILS</button>
                </div>
            </>
    )
}