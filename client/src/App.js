import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, } from "semantic-ui-react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, item: "dummy", description: "not tasty", price: 100 },
    { id: 2, name: "dummy1", complete: false },
  ]);
  return (

      <Container>
        <h1>Restaurant Menu</h1>
      
      </Container>

  );
}

export default App;
