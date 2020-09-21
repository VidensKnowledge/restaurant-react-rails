import React from "react";
import Item from "./Item";

class Menu extends React.Component  {
  getItems() {
    return this.props.items.map((item) => {
      return (
        <Item
        key= {item.id}
        {...item}
        deleteTodo={this.props.deleteItem}
        updatetodo={this.props.updateItem}
        />
      )
    })
  }
  
  render() {
    return (
      <div>
        {this.getItems()}
      </div>
    )
  }
}
  // <div>
  //   <h1>menu</h1>

  // </div>


export default Menu

