import React, { useState } from "react";
import { Form } from "semantic-ui-react";
const ItemForm = ({ addItem }) => {
  // state = { name: "" };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(name); //need this from props
    setName("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
      <Form.Input
        label="Entree"
        placeholder="Add An Entree"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
          <Form.Input
        label="Description"
        placeholder="Tell us about the Entree"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
          <Form.Input
        label="Price"
        placeholder="How much will it cost?"
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Form.Button color="green">Submit</Form.Button>
      </Form.Group>
    </Form>
  );
};
export default ItemForm;