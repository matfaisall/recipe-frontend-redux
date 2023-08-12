import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "boxicons";

const SearchBar = () => {
  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="border-0 bg-body-tertiary py-3"
        >
          <box-icon name="search" size="sm" color="gray"></box-icon>
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className="bg-body-tertiary border-0"
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
