import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleCheckBoxChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteClick = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="">
      <h1 className="border-solid border-2 border-indigo-500 shadow-lg justify-self-stretch justify-items-center text-8xl">
        To Do Lists
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="border-2 border-slate-400 shadow-xl justify-self-stretch justify-items-center rounded-md m-3 p-3"
      >
        <input
          placeholder="Type your To-Do Here..."
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className=" w-96 h-16 p-2 place-content-center border-2 border-slate-400 rounded-md "
        />
        &nbsp;
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-900 text-2xl mt-10 ml-5 shadow-xl w-32 max-h-fit rounded-lg text-white "
        >
          {" "}
          ADD
        </button>
      </form>
      <ul className="mt-5 items-start text-xl grid grid-rows-6 grid-flow-col gap-5 p-3 m-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckBoxChange(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            &nbsp; &nbsp;
            <button onClick={() => handleDeleteClick(todo.id)}> DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
