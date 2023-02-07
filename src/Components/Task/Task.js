import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import style from "./Task.module.css";
import { Draggable } from "react-beautiful-dnd";
const Task = ({ index, data }) => {

const onDragStart = (ev, id) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);

}
  return (
    <div onDragStart={(e) => onDragStart(e, index)} draggable>
      <Card className={`${style.card}`} style={{ width: "18rem" }}>
        <Card.Header>{data.title}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <span className="fw-bold">Status: </span>
            <span>{data.status}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Task;
