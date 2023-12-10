export const TodoComputer = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="py-4 px-4 flex justify-between bg-white rounded-md-b dark:bg-gray-800">
      <span className="text-gray-400">{computedItemsLeft}</span>
      <button
        className="text-gray-400"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </section>
  );
};
