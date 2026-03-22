import { useState } from "react";

function ToDoInput({ addTodo }) {
    const [input, setInput] = useState("");

    function addToDo() {
        addTodo(input);
        setInput("");
    }

    return (
        <div className="input-container">
            <input
                type="text"
                placeholder="Add toDo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="todo-input"
            />
            <button className="add-button" onClick={addToDo}>
                Add
            </button>
        </div>
    );
}

export default ToDoInput;
