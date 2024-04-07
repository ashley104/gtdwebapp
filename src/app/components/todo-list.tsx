import { api } from "~/trpc/server";

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
        completed: false,
    },
]

export async function TodoList() {
    const latestPost = await api.todo.todos();
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className={todo.completed ? "Line-through" : ""}>{todo.title}</li>
            ))}
        </ul>
    )
}