import React from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import SearchCharacter from "./components/SearchCharacter";
import {Route, Routes} from "react-router-dom";
import CharacterCardDetails from "./components/CharacterCardDetails";
import EpisodesGallery from "./components/EpisodesGallery";
import useHooks from "./hooks/useHooks";
import Navigation from "./components/Navigation";



function App() {
  const tittle:string = "Rick & Morty Gallery App"
    const {characters,getNextCharacters, getPrevCharacters, searchText, episodes,  handleSearchText, filteredCharacters}=useHooks();

    return (
        <div className="App">
            <header className="App-header">
                <img className={"App-logo"} src="/rick-and-morty-31042.png"  alt={"logo"}/>
                <h1>{tittle}</h1>
            </header>
            <Navigation/>
            <div>
                <p>Search for characters</p>
                <button onClick={getPrevCharacters}>Prev</button>
                <button onClick={getNextCharacters}>Next</button>
                <SearchCharacter searchText={handleSearchText} searchValue={searchText}/>
            <Routes>
                <Route path={"/"} element={<CharacterGallery characters={filteredCharacters}/>}/>
                <Route path={"/characters/:id"} element={<CharacterCardDetails characters={characters}/> }/>
                <Route path={"/episodes"} element={<EpisodesGallery episodes={episodes}/>}/>
                <Route path={"/episodes/:id"} element={<EpisodesGallery episodes={episodes}/>}/>
            </Routes>
                <a href="https://www.freepnglogos.com/pics/rick-and-morty">Rick And Morty from freepnglogos.com</a>
            </div>
            <footer><p>By Ana</p></footer>

        </div>
    );

}

export default App;
