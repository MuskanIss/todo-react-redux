import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Edit } from "./Components/Edit";
import { NotCompleted } from "./Components/NotCompleted";
import { TodoListNavigate } from "./Components/TodoListNavigate";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="todo">
          <Route path=":id" element={<TodoListNavigate />}>
            <Route path="edit" element={<Edit />}></Route>
          </Route>
        </Route>
        <Route path="notCompleted" element={<NotCompleted />}></Route>
        <Route path="*" element={<>Page not found</>}></Route>
      </Routes>
    </div>
  );
};
