import React from "react";

import CharacterCard from "./CharacterCard";
import {Character} from "../model/CharacterType";
import "../css_components/Gallery.css";

type CharacterGalleryProps={

    characters:Character[]
}

export default function CharacterGallery(props:CharacterGalleryProps){

    const fancyCards=props.characters.map(character=> <CharacterCard id={character.id} name={character.name} status={character.status} image={character.image} origin={character.origin}/>)

    return <div className={"character-gallery"}>{fancyCards}</div>

}