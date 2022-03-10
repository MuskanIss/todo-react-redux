import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const Home = () => {
  return (
    <div>
      <TodoInput />
      <TodoItem />
    </div>
  );
};
