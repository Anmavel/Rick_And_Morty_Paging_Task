import React from "react";

import CharacterCard from "./CharacterCard";
import {Character} from "./CharacterType";

type CharacterGalleryProps={

    characters:Character[]
}

export default function CharacterGallery(props:CharacterGalleryProps){

    const fancyCards=props.characters.map(character=> <CharacterCard id={character.id} name={character.name} status={character.status} image={character.image} origin={character.origin}/>)

    return <div>{fancyCards}</div>

}