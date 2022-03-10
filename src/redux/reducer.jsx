import { fetchdelete, fetchget } from "../Components/fetch";
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODOS": {
      return {
        ...state,
        todos: [...state.todos, payload],
        notCompleted: [...state.notCompleted, payload],
        total: state.total + 1,
      };
    }
    case "FETCH_TODOS": {
      const notCompleted = payload.filter((res) => {
        if (res.status != true) {
          return res;
        }
      });
      return {
        ...state,
        todos: [...payload],
        notCompleted: [...notCompleted],
        total: payload.length,
      };
    }
    case "CHANGE_STATUS": {
      const todos = state.todos.map((res) => {
        if (payload.id === res.id) {
          res.status = !payload.status;
        }
        return res;
      });
      const notCompleted = todos.filter((res) => {
        if (res.status != true) {
          return res;
        }
      });
      return { ...state, todos: [...todos], notCompleted: [...notCompleted] };
    }
    case "DELETE": {
      fetchdelete(`http://localhost:3000/todos/${payload}`);
      const todos1 = state.todos.filter((res) => {
        if (res.id != payload) {
          return res;
        }
      });
      const notCompleted = todos1.filter((res) => {
        if (res.status != true) {
          return res;
        }
      });
      return {
        ...state,
        todos: [...todos1],
        notCompleted: [...notCompleted],
        total: state.total - 1,
      };
    }
    case "EDIT": {
      const todos = state.todos.map((res) => {
        if (payload.id === res.id) {
          res.task = payload.value;
        }
        return res;
      });
      return { ...state, todos: [...todos] };
    }
    default: {
      return { ...state };
    }
  }
};
