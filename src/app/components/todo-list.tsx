const todos = [
    {
        id: 1,
        title: 'Learn React',
        completed: true
    },
    {
        id: 2,
        title: 'Learn TypeScript',
        completed: false
    },
    {
        id: 3,
        title: 'Learn GraphQL',
        completed: false
    },
]

export const TodoList = () => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className={todo.completed ? "Line-through" : ""}>{todo.title}</li>
            ))}
        </ul>
    )
}