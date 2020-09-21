import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, } from "semantic-ui-react";
import Menu from "./components/Menu";

function App() {
  const [items, setTodos] = useState([
    { id: 1, name: "dummy", description: "not tasty", price: 100 },
    { id: 2, name: "dummy1", complete: false },
  ]);
  return (

      <Container>
        <h1>Restaurant Menu</h1>
        <Menu items={items}/>
      </Container>

  );
}

export default App;
