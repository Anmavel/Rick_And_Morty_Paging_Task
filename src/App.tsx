import React from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import SearchCharacter from "./components/SearchCharacter";
import {Route, Routes, Link} from "react-router-dom";
import CharacterCardDetails from "./components/CharacterCardDetails";
import EpisodesGallery from "./components/EpisodesGallery";
import useHooks from "./hooks/useHooks";



function App() {
  const tittle:string = "Rick & Morty Gallery App"
    const {characters, searchText, episodes, getCharacters, handleSearchText, filteredCharacters}=useHooks();

    return (
        <div className="App">
            <header className="App-header">
                <img className={"App-logo"} src="/rick-and-morty-31042.png"  alt={"logo"}/>
                <h1>{tittle}</h1>
            </header>

            <div>
                <p>Search for characters</p>
                <button onClick={getCharacters}>Fetch Characters</button>
                <SearchCharacter searchText={handleSearchText} searchValue={searchText}/>
                <Link to={"/episodes"}>Link to Episodes Gallery</Link>
            <Routes>
                <Route path={"/characters/:id"} element={<CharacterCardDetails characters={characters}/> }/>
                <Route path={"/episodes"} element={<EpisodesGallery episodes={episodes}/>}/>
                <Route path={"/episodes/:id"} element={<EpisodesGallery episodes={episodes}/>}/>
                <Route path={"/"} element={<CharacterGallery characters={filteredCharacters}/>}/>
            </Routes>
                <a href="https://www.freepnglogos.com/pics/rick-and-morty">Rick And Morty from freepnglogos.com</a>
            </div>
            <footer><p>By Ana</p></footer>

        </div>
    );

}

export default App;
