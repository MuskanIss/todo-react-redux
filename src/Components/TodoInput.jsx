import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { fetchpost } from "./fetch";

export const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const click = () => {
    if (value != "") {
      const payload = { id: uuid(), task: value, status: false };
      fetchpost("http://localhost:3000/todos", payload);
      dispatch({
        type: "ADD_TODOS",
        payload,
      });
    }
  };
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <div>
        <button onClick={() => click()}>ADD</button>
      </div>
    </div>
  );
};
