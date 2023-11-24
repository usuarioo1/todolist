import { useState } from "react";

export const Todocreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handlesubmitAddTodo = (e) => {
    e.preventDefault();

    // Lógica para agregar una nueva tarea
    if (!title.trim()) {
      // Si el título está vacío o solo contiene espacios en blanco, no hacemos nada
      return;
    }

    // Llamar a la función createTodo con el título
    createTodo(title);

    // Restablecer el estado del título
    setTitle("");
  };

  return (
    <form
      onSubmit={handlesubmitAddTodo}
      className="bg-white rounded-md overflow-hidden py-4 px-8 flex gap-4 items-center"
    >
      <span className="rounded-full border-2 w-5 h-5 inline-block px-1"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        placeholder="crea una nueva tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
