import React from "react";
import {Character} from "../model/CharacterType";
import CharacterCard from "./CharacterCard";
import {Link, useParams} from "react-router-dom";
import "../css_components/CharacterCard.css";


type CharacterCardDetailsProps ={

characters : Character[]

}


export default function CharacterCardDetails(props:CharacterCardDetailsProps){
    const params=useParams()
    const  id: string | undefined = params.id;
    if(!id){
        return <div>ID is undefined</div>
    }

   const foundCharacter: Character | undefined =props.characters.find((f) =>(f.id===parseInt(id)))


    return(

        <div className={"card"}>
            <h5>
                {foundCharacter && foundCharacter.name}
            </h5>
            <img src={foundCharacter?.image} height="130" width="124"/>
            <p>Id:{foundCharacter?.id}  Status: {foundCharacter?.status}</p>
            <p>Origin:{foundCharacter?.origin.name}</p>
            <p>{foundCharacter?.species}</p>



        </div>
    )
}