import React from "react";
import { Checkbox, Header, Icon, Button } from "semantic-ui-react";

const Item = ({id, name, description, price, updateItem, deleteItem}) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox onClick={() => updateItem(id)} />
      <div  className="center">
        <Header as="h2" style={{ marginLeft: "15px" }}>
          {name}
        </Header>
      </div>
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