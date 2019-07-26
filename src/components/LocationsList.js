import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LocationsList() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      //  - `https://rickandmortyapi.com/api/character/` - [`docs`](https://rickandmortyapi.com/documentation/#get-all-characters)
      axios.get('https://rickandmortyapi.com/api/location/')
        .then((data)=>{
          console.log('location data',data);
          setLocations(data.data.results);
        }
        )
      }, [])


    return (
        locations.map((location, index)=>{
            return <h1>{location.name}</h1>
        }
    ))

}
