import React, {useState} from 'react';
import logo from './logo.svg';
import './rick-and-morty.png';

import './App.css';

import Greetings from "./components/Greetings";
import CharacterCard from "./components/CharacterCard";

import CharacterGallery from "./components/CharacterGallery";
import InputUser from './components/InputUser';
import {Character} from "./model/CharacterType";



function App() {

  const filteredPerson:Character={
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "unknown",
      "url": ""
    },
    "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41",
      "https://rickandmortyapi.com/api/episode/42",
      "https://rickandmortyapi.com/api/episode/43",
      "https://rickandmortyapi.com/api/episode/44",
      "https://rickandmortyapi.com/api/episode/45",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51"
    ],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
  }

  const tittle:string="Rick & Morty Gallery App"
  const names:string[]=["Lena", "Ana", "Roh", "Helen", "Edona"]
  const characters:{results:Character[]} = require('./model/characters.json');
  const[text,setText]=useState<string>("")
  const [toSearch,setToSearch]=useState<string>("")


  function handleText(text:string){
    setText(text)
  }

  function search(){

    const toSearch=text;
    console.log(toSearch)
    characters.results.filter(character=>character.name===toSearch).map(character =>
    { return <CharacterCard character={character}/> })

    }


  return (
    <div className="App">
      <header className="App-header">
        <img src="rick-and-morty.png"/>
        <h1>{tittle}</h1>

        <p>Search for Character Card:</p>
        <p><InputUser setText={handleText}/>{text}</p>


        <button onClick={search}>Search</button>

        <div>
          {<CharacterCard character={filteredPerson}/>}
        </div>

        {/*names.map(name=> <Greetings name={name}/>)*/}
        <div className={"character-gallery"}>
          {<CharacterGallery characters={characters.results}/>}

          {/*{characters.results.map(character=> <CharacterCard id={character.id} name={character.name} status={character.status} image={character.image} origin={character.origin} />)}*/}
        </div>

      </header>
    </div>
  );
}

export default App;
