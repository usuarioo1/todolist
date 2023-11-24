export const TodoFilter = () => {
  return (
    <section className="px-4 container mx-auto mt-8">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button className="hover:text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Completed</button>
      </div>
    </section>
  );
};
