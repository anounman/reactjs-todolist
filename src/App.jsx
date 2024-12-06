import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function handelAddTodos(newTodos) {
    const newTodoList = [...todos, newTodos];
    setTodos(newTodoList);
    presistData(newTodoList);
  }

  function presistData(newList) {
    localStorage.setItem(
      "todos",
      JSON.stringify({
        todos: newList,
      })
    );
  }

  function handelDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    presistData(newTodoList);
    setTodos(newTodoList);
  }

  function handelEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handelDelete(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        inputList={handelAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        delteTodo={handelDelete}
        handelEditTodo={handelEditTodo}
      />
    </>
  );
}

export default App;
