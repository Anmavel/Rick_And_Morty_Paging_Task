import React from "react";
import {Character} from "../model/Character";

export default function search(characters:Character[],text:String){
    console.log(text)
    const searchedCharacter=characters.filter(character=>
    { return text.includes(character.name)})
    return searchedCharacter
}