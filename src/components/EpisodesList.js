import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LocationsList() {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      //  - `https://rickandmortyapi.com/api/character/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-characters)
      axios.get('https://rickandmortyapi.com/api/episode/')
        .then((data)=>{
          console.log('episode data',data);
          setEpisodes(data.data.results);
        }
        )
      }, [])


    return (
        episodes.map((episode, index)=>{
            return <h1>{episode.name}</h1>
        }
    ))

}
