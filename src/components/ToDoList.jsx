import { useState, useEffect } from "react";
import ToDoInput from "./ToDoInput";
import TodoItem from "./TodoItem";

function ToDoList() {
    const [toDos, setToDo] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }, [toDos]);

    function deleteButton(index) {
        setToDo(prev => prev.filter((_, i) => i !== index));
    }

    function toggleTodo(index) {
        setToDo(prev =>
            prev.map((todo, i) =>
                i === index ? { ...todo, checked: !todo.checked } : todo
            )
        );
    }
    function addTodo(text) {
    setToDo(prev => [...prev, { text: text, checked: false }]);
}

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <ToDoInput addTodo={addTodo} />
            {toDos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    deleteButton={() => deleteButton(index)}
                    toggleTodo={() => toggleTodo(index)}
                />
            ))}
        </div>
    );
}

export default ToDoList;

