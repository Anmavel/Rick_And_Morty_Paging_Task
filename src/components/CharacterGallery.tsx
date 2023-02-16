import React, {ReactElement} from "react";
import CharacterCard from "./CharacterCard";
import "../css_components/Gallery.css";
import "../App.css"
import {Character} from "../model/CharacterType";

type CharacterGalleryProps={
    characters:Character[]
}

export default function CharacterGallery(props:CharacterGalleryProps){

    const fancyCard:ReactElement[]=props.characters.map((character)=> { return <CharacterCard character={character}/>})

    return <div className={"character-gallery"}>{fancyCard}</div>

}