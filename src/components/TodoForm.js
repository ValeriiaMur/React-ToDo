import React,{useState} from "react";

const TodoForm = (props) => {
    const [task, setTask] = useState("");
    const handleChanges = e => {
        setTask(e.target.value);
    };
    const submit = e => {
        props.addItem(e, task);
        setTask("");
    }

    return (
        <div>
            <h3>Add:</h3>
            <input
                type="text"
                name="task"
                placeholder="Add to do..."
                value = {task}
                onChange={handleChanges}
            />
            <div className = "bttns">
                <button onClick={submit} className="btn">Add</button>
                <button onClick = {props.clearCompleted} className="clear-tasks btn">Clear Completed</button>
            </div>
            
        </div>
    );
    
}

export default TodoForm;