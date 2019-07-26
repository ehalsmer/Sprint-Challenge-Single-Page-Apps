import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  });
  const handleInputChange = event => {
    setQuery({ ...query, name: event.target.value });
    console.log('query', query);
  };
  // const OnSearch = (query) => {
    
  // }
  // useEffect(()=>
  //   axios
  //     .get(`https://rickandmortyapi.com/api/character/?name=${query.name}`)
  //     .then(data => {
  //       console.log("search results", data.data.results);
  //       const results = data.data.results
  //       return results
  //     }),
  //   [query]);

  

  return (
    <section>
      <Form
        className="search-form"
        size="large"
        // onSubmit={() => OnSearch(query)}
      >
        <input
          onChange={handleInputChange}
          placeholder="Enter search query"
          value={query.search}
          name="search"
        />
        <Button style={{ margin: "0px 5px" }} size="large" type="submit">
          Search
        </Button>
      </Form>
    </section>
  );
}
