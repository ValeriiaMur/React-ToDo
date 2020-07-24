import React from "react";
import "./Todo.css"

const Todo = (props) => {
    return (
        <div 
            className = {props.item.completed === true ? "completed" : ""}
            onClick = {() => props.completeTask(props.item.id)}>
                {props.item.task}
                {console.log(props.item)}
        </div>
    )
}

export default Todo;