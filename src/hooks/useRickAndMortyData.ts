import { useEffect, useState } from "react";
import { Character } from "../model/Character";
import axios from "axios";
import { Episode } from "../model/Episode";

export default function useRickAndMortyData() {
    const [characters, setCharacters] = useState<Character[]>([]);

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [episodePageNumber, setEpisodePageNumber] = useState<number>(0);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [noMoreCharacterPages, setNoMoreCharacterPages] = useState<boolean>(false);
    const [noMoreEpisodePages, setNoMoreEpisodePages] = useState<boolean>(false);
    const CHARACTERS_ENDPOINT = "https://rickandmortyapi.com/api/character?page=";
    const EPISODES_ENDPOINT = "https://rickandmortyapi.com/api/episode?page=";

    function fetchCharacters(page: number) {
        axios
            .get(CHARACTERS_ENDPOINT + page)
            .then((response) => {
                const { results } = response.data;
                if (results.length === 0) {
                    setNoMoreCharacterPages(true);
                } else {
                    setCharacters(results);
                }
            })
            .catch((error) => {
                console.error("Error fetching Characters",error);
            });
    }

    function fetchEpisodes(page: number) {
        axios
            .get(EPISODES_ENDPOINT + page)
            .then((response) => {
                const { results } = response.data;
                if (results.length === 0) {
                    setNoMoreEpisodePages(true);
                } else {
                    setEpisodes(results);
                }
            })
            .catch((error) => {
                console.error("Error fetching Episodes", error);
            });
    }

    function getNextCharacters() {
        if (noMoreCharacterPages) return;
        const nextPage = pageNumber + 1;
        setPageNumber(nextPage);
    }

    function getPrevCharacters() {
        if (pageNumber <= 1) return;
        const prevPage = pageNumber - 1;
        setPageNumber(prevPage);
    }

    function getNextEpisodes() {
        if (noMoreEpisodePages) return;
        const nextPageEpisode = episodePageNumber + 1;
        setEpisodePageNumber(nextPageEpisode);
    }

    function getPrevEpisodes() {
        if (episodePageNumber <= 1) return;
        const prevPageEpisode = episodePageNumber - 1;
        setEpisodePageNumber(prevPageEpisode);
    }




    useEffect(() => {
        fetchCharacters(pageNumber);
    }, [pageNumber]);

    useEffect(() => {
        fetchEpisodes(episodePageNumber);
    }, [episodePageNumber]);

    return {
        characters,
        episodes,
        getNextCharacters,
        getPrevCharacters,
        getNextEpisodes,
        getPrevEpisodes,
    };
}
