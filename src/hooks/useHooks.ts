import {useEffect, useState} from "react";
import {Character} from "../model/CharacterType";
import {EpisodeType} from "../model/EpisodeType";
import axios from "axios";


export default function useHooks() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchText, setSearchText] = useState<string>("")
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [episodes, setEpisodes] = useState<EpisodeType[]>([])

    function getCharacters() {
        axios.get("https://rickandmortyapi.com/api/character?page=" + pageNumber)
            .then((response) => {
                console.log(response)
                setCharacters(response.data.results);
            })
            .catch((error) => {
                    console.error(error)
                }
            )
        setPageNumber(pageNumber + 1)
    }

    function getEpisodes() {
        axios.get("https://rickandmortyapi.com/api/episode")
            .then((response) => {
                console.log(response)
                setEpisodes(response.data.results);
            })
            .catch((error) => console.error(error))
    }

    function handleSearchText(searchText: string) {
        setSearchText(searchText)
    }

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase()) || character.status.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        getCharacters()
        getEpisodes()
    }, [])

    return {characters, searchText, episodes, getCharacters, getEpisodes, handleSearchText, filteredCharacters}
}