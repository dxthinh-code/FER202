// ItemListAdvanced.js
import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, InputGroup } from "react-bootstrap";

const initialState = {
  items: [],
  filter: "",
  sortBy: "created", 
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, { ...action.item, createdAt: Date.now(), isEditing: false }],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, isEditing: true } : item
        ),
      };
    case "SAVE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name, isEditing: false } : item
        ),
      };
    case "SET_FILTER":
      return { ...state, filter: action.value };
    case "SET_SORT":
      return { ...state, sortBy: action.value };
    default:
      return state;
  }
}

export default function ItemListAdvanced() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItemName, setNewItemName] = useState("");

  const handleAdd = () => {
    if (newItemName.trim()) {
      dispatch({ type: "ADD_ITEM", item: { id: Date.now(), name: newItemName } });
      setNewItemName("");
    }
  };

  const filteredItems = state.items
    .filter((item) => item.name.toLowerCase().includes(state.filter.toLowerCase()))
    .sort((a, b) =>
      state.sortBy === "name"
        ? a.name.localeCompare(b.name)
        : b.createdAt - a.createdAt
    );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form.Group>
            <Form.Label>New Item:</Form.Label>
            <Form.Control
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
            <Button className="mt-2" onClick={handleAdd}>Add Item</Button>
          </Form.Group>

          <Form.Group>
            <Form.Label>Filter:</Form.Label>
            <Form.Control
              placeholder="Search..."
              onChange={(e) => dispatch({ type: "SET_FILTER", value: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Sort by:</Form.Label>
            <Form.Select
              value={state.sortBy}
              onChange={(e) => dispatch({ type: "SET_SORT", value: e.target.value })}
            >
              <option value="created">Created Time</option>
              <option value="name">Alphabetical</option>
            </Form.Select>
          </Form.Group>

          <ListGroup className="mt-3">
            {filteredItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {item.isEditing ? (
                  <InputGroup>
                    <Form.Control
                      defaultValue={item.name}
                      onBlur={(e) => dispatch({ type: "SAVE_ITEM", id: item.id, name: e.target.value })}
                      autoFocus
                    />
                  </InputGroup>
                ) : (
                  <>
                    <span>{item.name}</span>
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => dispatch({ type: "EDIT_ITEM", id: item.id })}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
