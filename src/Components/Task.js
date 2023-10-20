import React from "react";
import { Card, Button } from "react-bootstrap";

const Task = (props) => {
  return (
    <Card style={{ width: "100%", marginBottom: "30px" }} key={props.id}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Task;
