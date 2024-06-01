import { useState } from "react";

export const Todolist = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    console.log(todos);

    setTodos([...todos, todo]);
    setTodo("");
  };

  const removeTodo = (item: string) => {
    setTodos(todos.filter((todo) => todo !== item));
  };

  const editTodo = (item: string) => {
    setTodo(item);
  };

  return (
    <>
      <div>
        <div>Todolist</div>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button id="add" onClick={addTodo}>
          Add
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <>
                <li>{todo}</li>
                <button onClick={() => removeTodo(todo)}>Remove</button>
                <button onClick={() => editTodo(todo)}>Edit</button>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
