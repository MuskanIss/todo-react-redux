import "./App.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Router } from "./Router";
import { useDispatch, useSelector } from "react-redux";
import { fetchget } from "./Components/fetch";

function App() {
  const dispatch = useDispatch();
  const total = useSelector((res) => res.total);
  useEffect(() => {
    fetchget("http://localhost:3000/todos").then((res) =>
      dispatch({
        type: "FETCH_TODOS",
        payload: res,
      })
    );
  }, []);
  return (
    <div className="App">
      <Link to="/">Home</Link>&nbsp; total:{total}&nbsp;
      <Link to="notCompleted">Not completed</Link>
      <Router />
    </div>
  );
}

export default App;
