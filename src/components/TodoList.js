// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo"

const TodoList  = props => {
    return(
        <div>
            <h3>Current Tasks:</h3>
            {props.items.map(it => (
                <Todo
                    key = {it.id}
                    item = {it}
                    completeTask = {props.completeTask}
                />
            ))}
        </div>
    )
}

export default TodoList;
