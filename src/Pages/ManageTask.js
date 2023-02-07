import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Task from "../Components/Task/Task";
import style from "./ManageTask.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const ManageTask = () => {
  const [show, setShow] = useState(false);
  const status = ["todo", "pending", "completed"];
  const handleClose = () => setShow(false);
  const SaveTask = () => {
    setTasks([...tasks, task]);
    setShow(false);
  };

  
  
  const handleShow = () => setShow(true);
  const [task, settask] = useState({});
  const [id, setId] = useState(1);
  const [tasks, setTasks] = useState([
    {
      title:"aaaaa",
      status:'todo',
    },
    {
      title:"aaaaa",
      status:'todo'
    },
    {
      title:"bbbbbbb",
      status:'completed'
    },
    {
      title:"mmmm",
      status:'completed'
    },
    {
      title:"kkkk",
      status:'completed'
    },
  ]);
  // console.log(task)
// useEffect(() => {
//   console.log(tasks)
// },)

const onDrop = (ev, status) => {
    let id = ev.dataTransfer.getData("id");
    console.log("iddddddd",id)
    const updated=tasks.map((element,index)=>{
      if(index==id){
        element.status=status
      }
      return element
    })
    console.log("updated",updated)
    setTasks(updated)
 }

const onDragOver = (ev) => {
    ev.preventDefault();
    console.log("dragover")
    // let id = ev.dataTransfer.getData("id");
    // const updated=tasks.map((element,index)=>{
    //   console.log("in")
    //   if(index==id){
    //     element.status=""
    //   }
    //   return element
    // })
    // console.log("updated",updated)
    // setTasks(updated)
}

  return (
    <DragDropContext>
      <div className={`container p-5`}>
        <Button className="my-4" variant="primary" onClick={handleShow}>
          Add new task
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Task Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  onChange={(e) => {
                    settask({ ...task, title: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Label>Status:</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  settask({ ...task, status: e.target.value });
                }}
              >
                <option>Select Status</option>
                {status.map((element, index) => {
                  return (
                    <option
                      value={element}
                      onChange={(e) => {
                        console.log("qqq", e.target.value);
                      }}
                    >
                      {element}
                    </option>
                  );
                })}
              </Form.Select>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={SaveTask}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        <div className={`row`}>
          <div className={`col-lg-3 align-items-center ${style.taskColumn}`}
          onDrop={(e)=>onDrop(e, "todo")}
          onDragOver={(ev)=>onDragOver(ev)}
          >
            <h4>To Do</h4>
            {
                tasks.map((element,index)=>(
                    element.status==='todo'&&<Task key={index} index={index} data={element} />
                ))
            }
          </div>

          <div className={`col-lg-3 align-items-center ${style.taskColumn}`}
            onDrop={(e)=>onDrop(e, "pending")}
            onDragOver={(ev)=>onDragOver(ev)}
          >
            <h4>Pending</h4>
            {
                tasks.map((element,index)=>(
                    element.status==='pending'&&<Task key={index} index={index} data={element} />

                ))
            }
          </div>
          <div className={`col-lg-3 align-items-center ${style.taskColumn}`}
            onDrop={(e)=>onDrop(e, "completed")}
            onDragOver={(ev)=>onDragOver(ev)}
          >
            <h4>Completed</h4>
            {
                tasks.map((element,index)=>(
                    element.status==='completed'&&<Task key={index} index={index} data={element} />
                ))
            }
          </div>
          
        </div>
      </div>
    </DragDropContext>
  );
};

export default ManageTask;
