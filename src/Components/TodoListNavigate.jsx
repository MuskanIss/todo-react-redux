import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { TodoListNavigateItem } from "./TodoListNavigateItem";

export const TodoListNavigate = () => {
  const location = useLocation();
  const index = location.pathname.lastIndexOf("/");
  const id = location.pathname.slice(index + 1);
  const todos = useSelector((res) => res.todos);
  const [item, setItem] = useState({});
  useEffect(() => {
    let f = 0;
    todos.map((res) => {
      if (id == res.id) {
        setItem({ ...res });
        f = 1;
      }
    });
    if (f === 0) {
      setItem({});
    }
  }, [todos, location]);
  return (
    <>
      {item && id != "edit" && <TodoListNavigateItem item={item} />}
      <Outlet />
    </>
  );
};
