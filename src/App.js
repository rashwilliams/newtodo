import React, { useState } from "react";
import { Container, Col, Row, Form, TextArea } from "react-bootstrap";
import Task from "./Components/Task";
import TaskNav from "./Components/TaskNav";
import TaskForm from "./Components/TaskForm";
import { getAllTasks, createNewTask } from "./Lib/APIs/TaskAPIs";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      task: "Complete task 1 by end of the day.",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      task: "Submit report for Task 2 by tomorrow.",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description for Task 3",
      task: "Attend meeting for Task 3 at 2 PM.",
    },
    // Add more tasks as needed
  ]);

  const createNewTask = (taskData) => {
    return setTasks([...tasks, taskData]);
  };
  return (
    <Container>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <TaskNav />
          {tasks.map((task) => {
            return (
              <Task
                title={task.title}
                description={task.description}
                id={task.id}
              />
            );
          })}
          <TaskForm createNewTask={createNewTask} />
        </Col>
        <Col lg={3}></Col>
      </Row>{" "}
    </Container>
  );
};

export default App;
