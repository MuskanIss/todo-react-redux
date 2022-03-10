import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPatchedit } from "./fetch";
export const Edit = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const index = location.pathname.lastIndexOf("o");
  const id = location.pathname.slice(index + 2).split("/")[0];
  const todos = useSelector((res) => res.todos);
  const [item, setItem] = useState({});
  const [value, setValue] = React.useState("");
  useEffect(() => {
    let f = 0;
    todos.map((res) => {
      if (id == res.id) {
        setItem({ ...res });
        setValue(res.task);
        f = 1;
      }
      if (f === 0) {
        setItem({});
        setValue("");
      }
    });
  }, [todos]);
  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          fetchPatchedit(`http://localhost:3000/todos/${item.id}`, value);
          dispatch({
            type: "EDIT",
            payload: { id: item.id, value: value },
          });
          navigate("/");
        }}
      >
        Edit
      </button>
    </>
  );
};
