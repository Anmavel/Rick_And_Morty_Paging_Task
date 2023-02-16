import React, {useState} from 'react';
import logo from './logo.svg';
import './rick-and-morty.png';

import './App.css';

import Greetings from "./components/Greetings";
import CharacterCard from "./components/CharacterCard";

import CharacterGallery from "./components/CharacterGallery";
import InputUser from './components/InputUser';
import {Character} from "./model/CharacterType";
import search from "./components/search";



function App() {

  const tittle:string="Rick & Morty Gallery App"
  const names:string[]=["Lena", "Ana", "Roh", "Helen", "Edona"]
  const characters:{results:Character[]} = require('./model/characters.json');
  const[text,setText]=useState<string>("")


  function handleText(text:string){
    setText(text)
  }

  const searchedCharacter=search(characters.results,text)


  return (
    <div className="App">
      <header className="App-header">
        <img src="rick-and-morty.png"/>
        <h1>{tittle}</h1>

        <p>Search for Character Card:</p>
        <p><InputUser setText={handleText}/></p>

        <p>{<CharacterGallery characters={searchedCharacter}/>}</p>

        {/*<button onClick={search}>Search</button>*/}
        {/*names.map(name=> <Greetings name={name}/>)*/}

        <div className={"character-gallery"}>
          {<CharacterGallery characters={characters.results}/>}
        </div>

      </header>
      <body>



      </body>
    </div>
  );
}

export default App;
