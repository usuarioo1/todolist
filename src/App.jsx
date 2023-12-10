import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TodoComputer } from "./components/TodoComputer";
import { Todocreate } from "./components/TodoCreate";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";

const initialStateTodos = [
  {
    id: 1,
    title: "anda al gym",
    completed: true,
  },
  {
    id: 2,
    title: "anda a trabajar",
    completed: false,
  },
  {
    id: 3,
    title: "pasea al perro",
    completed: false,
  },
  {
    id: 4,
    title: "toma agua",
    completed: false,
  },
  {
    id: 5,
    title: "cocinar",
    completed: true,
  },
];

export const App = () => {
  
  

  const [todos, setTodos] = useState(initialStateTodos);
  useEffect(()=> {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now() + 1,
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");
  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (filter) => setFilter(filter);

  return (
    <div className="bg-contain bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')] bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <Header />

      <main className="container mx-auto px-4 mt">
        <Todocreate createTodo={createTodo} />

        <TodoList
          todos={filterTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />

        <TodoComputer
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
      </main>

      <TodoFilter
        changeFilter={changeFilter}
        filter={filter}
      />

      <footer className="text-center mt-8 dark:text-gray-400">
        Drag and Drop to reorder list
      </footer>
    </div>
  );
};
