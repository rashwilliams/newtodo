import React from "react";
import {Button} from "react-bootstrap";

const TaskButton= (props) =>{
return <button className={classes.btn2}>{props.children}</button>;
}

export default TaskButton;