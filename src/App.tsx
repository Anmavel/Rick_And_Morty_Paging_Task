import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import SearchCharacter from "./components/SearchCharacter";
import {Route, Routes, useLocation} from "react-router-dom";
import CharacterCardDetails from "./components/CharacterCardDetails";
import EpisodesGallery from "./components/EpisodesGallery";
import useRickAndMortyData from "./hooks/useRickAndMortyData";
import Navigation from "./components/Navigation";
import {useSearchFilter} from "./hooks/useSearchFilter";
import {Character} from "./model/Character";


function App() {
    const tittle: string = "Rick & Morty Gallery App"
    const {
        characters,
        episodes,
        getNextCharacters,
        getPrevCharacters,
        getNextEpisodes,
        getPrevEpisodes,
    } = useRickAndMortyData();
    let searchText: string, handleSearchText: (searchText: string) => void, filteredCharacters: Character[];
    ({searchText, handleSearchText, filteredCharacters} = useSearchFilter(characters));
    const location = useLocation();
    const [isCharacterGallery, setIsCharacterGallery] = useState<boolean>(false);
    const handlePrevButtonClick = () => {
        if (isCharacterGallery) {
            getPrevCharacters();
        } else {
            getPrevEpisodes();
        }
    };

    const handleNextButtonClick = () => {
        if (isCharacterGallery) {
            getNextCharacters();
        } else {
            getNextEpisodes();
        }
    };
    useEffect(() => {
        if (location.pathname === "/") {
            setIsCharacterGallery(true)
        } else {
            setIsCharacterGallery(false)
        }
    }, [location])

    return (
        <div className="App">
            <header className="App-header">
                <img className={"App-logo"} src="/rick-and-morty-31042.png" alt={"logo"}/>
                <h1>{tittle}</h1>
            </header>
            <Navigation/>
            <div className={"gallery-button"}>
                <button onClick={handlePrevButtonClick}>Prev</button>
                <button onClick={handleNextButtonClick}>Next</button>
            </div>

            <div>
                <SearchCharacter searchText={handleSearchText} searchValue={searchText}
                                 isCharacterGallery={isCharacterGallery}/>
                <Routes>
                    <Route path={"/"} element={<CharacterGallery characters={filteredCharacters}/>}/>
                    <Route path={"/characters/:id"} element={<CharacterCardDetails characters={characters}/>}/>
                    <Route path={"/episodes"} element={<EpisodesGallery episodes={episodes}/>}/>
                    <Route path={"/episodes/:id"} element={<EpisodesGallery episodes={episodes}/>}/>
                </Routes>
                <a href="https://www.freepnglogos.com/pics/rick-and-morty">Rick And Morty from freepnglogos.com</a>
            </div>
            <footer><p>By Ana</p></footer>

        </div>
    )
        ;

}

export default App;
