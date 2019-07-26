import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [searchFor, setSearchFor] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  console.log('query', query);

  const onSearch = (query) => {
    // setName(query.name);
    setSearchFor(query)
    console.log('searching for:', searchFor);
  }

  useEffect(()=> {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchFor}`)
      .then(data => {
        console.log("search results", data.data.results);
        const results = data.data.results
        setSearchResults(results);
      })
  },[searchFor]);

  

  return (
    <section>
      <Form
        className="search-form"
        size="large"
        onSubmit={() => onSearch(query)}
      >
        <input
          onChange={handleInputChange}
          placeholder="Enter character name"
          value={query}
          name="search"
        />
          <Button style={{ margin: "0px 5px" }} size="large" type="submit">
            Search
          </Button>
      </Form>
      {/* <div>{searchResults.map((result)=>{return <p>{result.name}</p>})}</div> */}
      <section className="character-list grid-view">
        {searchResults.map((character, index) => {
          return (
            <CharacterCard
              name={character.name}
              imageSrc={character.image}
              species={character.species}
              location={character.location.name}
              origin={character.origin.name}
              key={index}
            />
          );
        })}
      </section>
    </section>
  );
}

