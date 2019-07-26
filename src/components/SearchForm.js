import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  return (
    <section>
      <Form className="search-form" size='medium' onSubmit={() => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="Enter your search query"
          value={query.search}
          name="search"
        />
        <Button style={{margin:"0px 5px"}} size='medium' type="submit">Search</Button>
      </Form>
    </section>
  );
}
