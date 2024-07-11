function TodoItem(task) {
    return (
        <li>
            <span>V</span>
            <p>{task.description}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };