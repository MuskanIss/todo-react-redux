import React, { useEffect } from "react";
import { fetchPatch } from "./fetch";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export const TodoListNavigateItem = ({ item }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <>
      {item.id ? (
        <div>
          <input
            type="checkbox"
            checked={item.status}
            onChange={() => {
              fetchPatch(`http://localhost:3000/todos/${item.id}`, item.status);
              dispatch({
                type: "CHANGE_STATUS",
                payload: item,
              });
            }}
          />
          <div>{item.task}</div>
          <button
            onClick={() => {
              dispatch({
                type: "DELETE",
                payload: item.id,
              });
            }}
          >
            Delete
          </button>
          <Link to={`${location.pathname}/edit`}>Edit</Link>
        </div>
      ) : (
        <>Page Not Found</>
      )}
    </>
  );
};
