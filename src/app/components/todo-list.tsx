import { api } from "~/trpc/server";

// export async function TodoList() {
//   try {
//     const todos = await api.todo.todos();

//     if (!todos) {
//       return <p>No todos found</p>;
//     }

//     return (
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} className={todo.done ? "line-through" : ""}>
//             {todo.title}
//           </li>
//         ))}
//       </ul>
//     );
//   } catch (error) {
//     console.error(error);
//     return <p>An error occurred while fetching the todos</p>;
//   }
// }
const todos = [
  {
    id: 1,
    title: "Learn React",
    done: true,
  },
  {
    id: 2,
    title: "Learn TypeScript",
    done: false,
  },
  {
    id: 3,
    title: "Learn GraphQL",
    done: false,
  },
];

// export function TodoList() {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id} className={todo.done ? "line-through" : ""}>{todo.title}</li>
//       ))}
//     </ul>
//   );
// }

export async function TodoList() {
  const todos = await api.todo.todos();
  if (!todos) {
    return <p>No todos found</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.done ? "line-through" : ""}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;