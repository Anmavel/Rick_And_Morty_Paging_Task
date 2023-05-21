import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import axios from "axios";
import {Episode} from "../model/Episode";


export default function useHooksForCharacters() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchText, setSearchText] = useState<string>("")
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [episodePageNumber, setEpisodePageNumber] = useState<number>(0);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    function getNextCharacters() {
        const nextPage = pageNumber + 1;
        axios.get("https://rickandmortyapi.com/api/character?page=" + pageNumber)
            .then((response) => {
                console.log(response)
                setCharacters(response.data.results);
            })
            .catch((error) => {
                    console.error(error)
                }
            )
        setPageNumber(nextPage)
    }

    function getPrevCharacters() {
        const prevPage = pageNumber - 1;
        setPageNumber(pageNumber - 1)
        axios.get("https://rickandmortyapi.com/api/character?page=" + pageNumber)
            .then((response) => {
                console.log(response)
                setCharacters(response.data.results);
            })
            .catch((error) => {
                    console.error(error)
                }
            )
        setPageNumber(prevPage)
    }

    function getNextEpisodes() {
        const nextPageEpisode = episodePageNumber + 1;
        axios
            .get(`https://rickandmortyapi.com/api/episode?page=${nextPageEpisode}`)
            .then((response) => {
                console.log(response);
                setEpisodes(response.data.results);
            })
            .catch((error) => console.error(error));
        setEpisodePageNumber(nextPageEpisode);
    }

    function getPrevEpisodes() {
        const prevPageEpisode = episodePageNumber - 1;
        axios
            .get(`https://rickandmortyapi.com/api/episode?page=${prevPageEpisode}`)
            .then((response) => {
                console.log(response);
                setEpisodes(response.data.results);
            })
            .catch((error) => console.error(error));
        setEpisodePageNumber(prevPageEpisode);
    }

    function handleSearchText(searchText: string) {
        setSearchText(searchText)
    }

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase()) || character.status.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        getNextCharacters()
        getNextEpisodes()
    }, [])

    return {
        characters,
        episodes,
        getNextCharacters,
        getPrevCharacters,
        getNextEpisodes,
        getPrevEpisodes,
        searchText,
        handleSearchText,
        filteredCharacters
    }
}