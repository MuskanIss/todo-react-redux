import React from "react";
import { useSelector } from "react-redux";

export const NotCompleted = () => {
  const notCompleted = useSelector((res) => res.notCompleted);
  return (
    <div>
      {notCompleted.map((res) => {
        return <div>{res.task}</div>;
      })}
    </div>
  );
};
