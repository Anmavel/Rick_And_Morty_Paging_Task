import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./components/Greetings";
import CharacterCard from "./components/CharacterCard";
import CharacterGallery from "./components/CharacterGallery";
import InputUser from './components/InputUser';
import {Character} from "./model/CharacterType";
import search from "./components/search";
import axios from "axios";
import SearchCharacter from "./components/SearchCharacter";



function App() {

  const tittle:string="Rick & Morty Gallery App"
  const names:string[]=["Lena", "Ana", "Roh", "Helen", "Edona"]
  const [characters,setCharacters]=useState<Character[]>([]);
        // const characters:{results:Character[]} = require('./model/characters.json');
        //const[text,setText]=useState<string>("")
    const[searchText,setSearchText]=useState<string>("")

        {/*function handleText(text:string){setText(text)}
        const searchedCharacter=search(characters,text)
        */}

  function getCharacters(){
    axios.get("https://rickandmortyapi.com/api/character")
        .then ((response)=>{console.log(response)
        setCharacters(response.data.results);
        })
        .catch((error)=> { console.error(error)}
        )
  }


  function handleSearchText(searchText:string){
        setSearchText(searchText)
    }
    const filteredCharacters=characters.filter((character)=>
        character
            .name
            .toLowerCase()
            .includes(searchText.toLowerCase())
        ||
        character
            .status
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );



    return (
        <div className="App">
            <header className="App-header">
                <img className={"App-logo"} src="./rick-and-morty-31042.png" height="230" width="224"/>
                <h1>{tittle}</h1>
            </header>

            {/*
            <a href="https://www.freepnglogos.com/pics/rick-and-morty">Rick And Morty from freepnglogos.com</a>
            <p>Search for Character Card:</p>
            <p><InputUser setText={handleText}/></p>
            */}

            <div>
                <p>Search for characters</p>
                <button onClick={getCharacters}>Fetch Characters</button>
                <SearchCharacter searchText={handleSearchText} searchValue={searchText}/>
                {<CharacterGallery characters={filteredCharacters}/>}
            </div>

            <body>
            <div>
                {/*<p>{<CharacterGallery characters={searchedCharacter}/>}</p>*/}
                {/*<button onClick={search}>Search</button>*/}
                {/*names.map(name=> <Greetings name={name}/>)*/}
                <div className={"character-gallery"}>
                    {<CharacterGallery characters={characters}/>}
                </div>
            </div>
            </body>

            <footer>
                <p>By Ana</p>
            </footer>


        </div>
    );

}



export default App;
