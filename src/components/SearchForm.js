import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [searchFor, setSearchFor] = useState('Rick');

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
        // const results = data.data.results
        // return results
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
          placeholder="Enter search query"
          value={query}
          name="search"
        />
        <Button style={{ margin: "0px 5px" }} size="large" type="submit">
          Search
        </Button>
      </Form>
    </section>
  );
}
