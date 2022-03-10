import React from "react";

export const TodoListItem = ({ item }) => {
  return (
    <div>
      <div>{item.task}</div>
    </div>
  );
};
