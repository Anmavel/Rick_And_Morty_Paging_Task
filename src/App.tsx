import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";
import CharacterCard from "./CharacterCard";
import {Character} from "./CharacterType";
import CharacterGallery from "./CharacterGallery";



function App() {


  const name2:string="Rick & Morty App"
  const names:string[]=["Lena", "Ana", "Roh", "Helen", "Edona"]
  const characters:{results:Character[]} = require('./characters.json');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>Edit <code>src/App.tsx</code> and save to reload.</p>*/}
        <h1>{name2}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

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
