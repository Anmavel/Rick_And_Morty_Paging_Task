import React, { ReactElement } from "react";
import CharacterCard from "./CharacterCard";
import "../css_components/CharacterGallery.css";
import "../css_components/GalleryButtons.css";
import "../App.css";
import { Character } from "../model/Character";

type CharacterGalleryProps = {
    characters: Character[];
};

export default function CharacterGallery(props: CharacterGalleryProps) {

    const charactersToDisplay: ReactElement[] = props.characters.map(
        (character: Character) => {
            return <CharacterCard key={character.id} character={character} />;
        }
    );

    return (
            <div className="character-gallery">{charactersToDisplay}</div>
    );
}

