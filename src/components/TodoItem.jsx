

function TodoItem({ todo, deleteButton, toggleTodo }) {
    return (
        <div className="todo-list">
            <input
                type="checkbox"
                checked={todo.checked}
                onChange={toggleTodo}
                className="check-box"
            />
            <p>{todo.text}</p>
            <button onClick={deleteButton} className="delete-button">Remove</button>
        </div>
    );
}

export default TodoItem;
