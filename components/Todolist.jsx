import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { IconMoon, IconSunHigh } from "@tabler/icons";

export default function Todolist() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isFirst, setIsFirst] = useState(true);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const incompletedTodos = totalTodos - completedTodos;

  const themes = {
    light: {
      name: "light",
      background: "white",
      foreground: "black",
    },
    dark: {
      name: "dark",
      background: "black",
      foreground: "white",
    },
  };

  const [selTheme, setSelTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (selTheme.name === "light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);
  };

  useEffect(() => {
    loadTodo();
  }, []);

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }
    saveTodo();
  }, [todos]);

  const addTodo = () => {
    setTodos([{ title: input, completed: false }, ...todos]);
    setInput("");
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    setTodos([...todos]);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx !== 0) {
      const temp = todos[idx - 1];
      todos[idx - 1] = todos[idx];
      todos[idx] = temp;
      setTodos([...todos]);
    }
  };

  const moveDown = (idx) => {
    if (idx !== todos.length - 1) {
      const temp = todos[idx + 1];
      todos[idx + 1] = todos[idx];
      todos[idx] = temp;
      setTodos([...todos]);
    }
  };

  const saveTodo = () => {
    localStorage.setItem("TodoList", JSON.stringify(todos));
  };

  const loadTodo = () => {
    const todosJSON = localStorage.getItem("TodoList");
    if (todosJSON === null) setTodos([]);
    else setTodos(JSON.parse(todosJSON));
  };

  return (
    <div style={{ backgroundColor: selTheme.background }} className="pb-1">
      {/* Entire App container (required for centering) */}
      <div
        style={{
          maxWidth: "700px",
          backgroundColor: selTheme.background,
        }}
        className="mx-auto"
      >
        {/* App header */}
        <p
          className="display-4 text-center fst-italic mb-4"
          style={{ color: selTheme.foreground }}
        >
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <div className="d-flex gap-2">
          <input
            className="form-control mb-1 fs-4"
            placeholder="insert todo here..."
            onKeyUp={(event) => {
              if (event.key != "Enter") {
                return;
              }
              if (input === "") {
                alert("Todo cannot be empty");
                return;
              }
              addTodo();
            }}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            value={input}
          />
          <button
            className="btn btn-dark"
            onClick={() => {
              toggleTheme();
            }}
          >
            {selTheme.name === "light" && <IconSunHigh />}
            {selTheme.name === "dark" && <IconMoon />}
          </button>
        </div>

        {/* Todos */}
        {todos.map((todo, i) => (
          <Todo
            title={todo.title}
            completed={todo.completed}
            theme={selTheme}
            key={i}
            onMark={() => {
              markTodo(i);
            }}
            onDelete={() => {
              deleteTodo(i);
            }}
            onMoveUp={() => {
              moveUp(i);
            }}
            onMoveDown={() => {
              moveDown(i);
            }}
          />
        ))}

        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({totalTodos}) </span>
          <span className="text-warning">Pending ({incompletedTodos}) </span>
          <span className="text-success">Completed ({completedTodos})</span>
        </p>

        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Panyapat Wongdee 640610650
        </p>
      </div>
    </div>
  );
}
