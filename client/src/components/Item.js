import React from "react";
import { Card, Checkbox, Header, Icon, Button, Container } from "semantic-ui-react";

const Item = ({id, name, description, price, updateItem, deleteItem}) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Card alignItems="center" >
      <div  className="center">
      <Checkbox onClick={() => updateItem(id)} />
        <Header as="h2" style={{ marginLeft: "15px" }}>
          {name}
        </Header>
        <h1>
          {price}
        </h1>
        <p>
          {description}
        </p>
      </div>
      </Card>
    </div>
    <Button
      icon
      color="red"
      size="tiny"
      style={{ marginLeft: "15px" }}
      onClick={() => deleteItem(id)}
    >
      <Icon name="trash" />
    </Button>
  </div>
)

const styles = {
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Item;