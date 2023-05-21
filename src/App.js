import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToDoList from "./ToDoList";
import Button from "./Button";

const App = () => {
  return (
    <Router>
      <div className="m-5 p-5 subpixel-antialiased	">
        <h1 className="text-center text-5xl text-red-900 m-0 pb-5">
          Welcome to myFirst React App
        </h1>
        <hr />
        <nav className="m-0 p-0">
          <ul className="leading-10 space-y-4 ">
            <li>
              <Link
                to="/ToDoList"
                className="text-left text-3xl text-blue-500 hover:text-lime-900 "
              >
                <button>Go to ToDoList</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/Button"
                className="text-left text-3xl text-blue-500	hover:text-lime-900 "
              >
                <button>Go to Button</button>
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>

      <Routes>
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Button" element={<Button />} />
      </Routes>
    </Router>
  );
};

export default App;
