import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, } from "semantic-ui-react";
import Menu from "./components/Menu";
import axios from "axios";
import ItemForm from "./components/ItemForm";


function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Meatloaf", description: "for meatlovers only", price: 37.99 },
    { id: 2, name: "Mac & Cheese", description: "fire", price: 25.50 },
  ]);


  useEffect(()=>{
    axios
    .get("/api/items").then((res) => {
      setItems(res.data);
    }).catch((err) => {
      alert("couldn't fetch menu items");
    })
  }, []);

  const addItem = (name, description, price) => {
    //  API CALL TO ADD ITEM
    axios
      .post("/api/items", { name: name, description: description, price: price})
      .then((res) => {
        setItems([...items, res.data]);
      })
      .catch((err) => {
        alert("error occurred creating item");
      });
  };

  const deleteItem = (id) => {
    axios
    .delete(`/api/items/${id}`)
    .then((res) => {
      setItems(items.filter((item)=> item.id !== res.data.item.id))
    })
    .catch((err) => {
      alert("Item not deleted")
    })
  }
  return (

      <Container>
        <h1>Restaurant Menu</h1>
        <Menu items={items} deleteItem={deleteItem}/>
        <ItemForm addItem={addItem}/>
      </Container>

  );
}

export default App;
