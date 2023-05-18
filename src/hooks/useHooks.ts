import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import {Episode} from "../model/Episode";
import axios from "axios";


export default function useHooks() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchText, setSearchText] = useState<string>("")
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [episodePageNumber, setEpisodePageNumber] = useState<number>(1);
    const [episodes, setEpisodes] = useState<Episode[]>([])

    function getNextCharacters() {
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
    function getPrevCharacters() {
        axios.get("https://rickandmortyapi.com/api/character?page=" + pageNumber)
            .then((response) => {
                console.log(response)
                setCharacters(response.data.results);
            })
            .catch((error) => {
                    console.error(error)
                }
            )
        setPageNumber(pageNumber - 1)
    }


    function getEpisodes() {
        axios.get("https://rickandmortyapi.com/api/episode?page="+ episodePageNumber)
            .then((response) => {
                console.log(response)
                setEpisodes(response.data.results);
            })
            .catch((error) => console.error(error))
        setEpisodePageNumber(episodePageNumber + 1)
    }

    function handleSearchText(searchText: string) {
        setSearchText(searchText)
    }

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase()) || character.status.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        getNextCharacters()
        getPrevCharacters()
        getEpisodes()
    }, [])

    return {characters,getNextCharacters, getPrevCharacters, searchText, episodes,  handleSearchText, filteredCharacters}
}