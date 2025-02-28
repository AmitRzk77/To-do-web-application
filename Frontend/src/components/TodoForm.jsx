import React, { useState } from "react";
import { useTodo } from "../Context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

     
    if (todo.trim()) {
      addTodo(todo); // Pass the new todo title
      setTodo("");
    }
  };

  return (
    <form className="flex  "  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your tasks.."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-pink-500 hover:bg-fuchsia-500 text-white shrink-0">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
