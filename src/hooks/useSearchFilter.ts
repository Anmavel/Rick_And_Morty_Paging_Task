import {useState} from "react";
import {Character} from "../model/Character";

export function useSearchFilter(characters:Character[]){
    const [searchText, setSearchText] = useState<string>("");

    const filteredCharacters = characters.filter(
        (character) =>
            character.name.toLowerCase().includes(searchText.toLowerCase()) ||
            character.status.toLowerCase().includes(searchText.toLowerCase())
    );

    function handleSearchText(searchText: string) {
        setSearchText(searchText);
    }

    return {searchText,handleSearchText,filteredCharacters}

}
