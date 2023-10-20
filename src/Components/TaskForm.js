import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";


const TaskForm = (props) => {
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState ('');

    const changeTitleHandler = (event) => {
        setTitle (event.target.value);
    };

    const changeDescriptionHandler = (event) => {
        setDescription (event.target.value);
    };

    const onCreateNewTask = (event) => {
        event.preventDefault();

        const taskData = {title, description};
        props.createNewTask (taskData);

        setTitle ("");
        setDescription("");
    };


    return (

        <div>

        <Form onSubmit={onCreateNewTask}>
        <Form.Group className="mb-3">
        <Form.Control 
            placeholder="Enter Text"
            onChange={changeTitleHandler}
            value={title}
            
            />

        </Form.Group>
    
        <Form.Group className="mb-3">
        <Form.Control 
            as="textarea"
            onChange={changeDescriptionHandler}
            value={description}

        />
        </Form.Group>
        <Button type="submit">Submit</Button>
        </Form>
        </div>
    );

};

export default TaskForm;