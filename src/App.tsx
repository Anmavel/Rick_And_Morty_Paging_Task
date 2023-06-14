import React from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import SearchCharacter from "./components/SearchCharacter";
import {Route, Routes, useLocation} from "react-router-dom";
import CharacterCardDetails from "./components/CharacterCardDetails";
import EpisodesGallery from "./components/EpisodesGallery";
import EpisodeCardDetails from "./components/EpisodeCardDetails"
import useRickAndMortyData from "./hooks/useRickAndMortyData";
import Navigation from "./components/Navigation";
import {useSearchFilter} from "./hooks/useSearchFilter";
import {Character} from "./model/Character";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Header from "./components/Header";


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
    const handlePrevButtonClick = () => {
        if (location.pathname === "/characters") {
            getPrevCharacters();
        } else if (location.pathname === "/episodes") {
            getPrevEpisodes();
        }
    };

    const handleNextButtonClick = () => {
        if (location.pathname === "/characters") {
            getNextCharacters();
        } else if (location.pathname === "/episodes") {
            getNextEpisodes();
        }
    };


    return (
        <div className="App">
            <Header tittle={tittle}/>
            <Navigation/>
            {location.pathname === "/characters" || location.pathname === "/episodes" ? (
                <div className="gallery-button">
                    <button onClick={handlePrevButtonClick}>Prev</button>
                    <button onClick={handleNextButtonClick}>Next</button>
                </div>
            ) : <></>}

            <div>
                <SearchCharacter searchText={handleSearchText} searchValue={searchText}/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/characters"} element={<CharacterGallery characters={filteredCharacters}/>}/>
                    <Route path={"/characters/:id"} element={<CharacterCardDetails characters={characters}/>}/>
                    <Route path={"/episodes"} element={<EpisodesGallery episodes={episodes}/>}/>
                    <Route path={"/episodes/:id"} element={<EpisodeCardDetails episodes={episodes}/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
            </div>
            <Footer/>

        </div>
    )
        ;

}

export default App;
