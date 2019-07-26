import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Grid} from 'semantic-ui-react';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    //  - `https://rickandmortyapi.com/api/character/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-characters)
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((data)=>{
        console.log(data);
        setCharacters(data.data.results);
      }
      )
    }, [])
    
    console.log(characters);
    return (
    <section className='character-list grid-view'>
      {characters.map((character, index)=>{
        return (
          // <h1>{character.name}</h1>
          <CharacterCard name={character.name} imageSrc={character.image} species={character.species} location={character.location.name} origin={character.origin.name} key={index}/>
        )})
      }
          {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    </section>
    )
  

}
