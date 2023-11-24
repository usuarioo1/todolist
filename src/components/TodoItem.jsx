import { CrossIcon } from "./icons/IconCross";
import { IconCheck } from "./icons/IconCheck";

export const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
      <button
        className={`${
          completed
            ? "rounded-full border-2 w-5 h-5 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center"
            : "rounded-full border-2 w-5 h-5 inline-block flex-none"
        }`}
        onClick={() => updateTodo(id)}
      >
        <IconCheck />
      </button>
      <p className={`"text-gray-600 grow" ${completed && "line-through"}`}>
        {title}
      </p>
      <button
        className="flex-none"
        onClick={() => removeTodo(id)}
      >
        <CrossIcon />
      </button>
    </article>
  );
};
