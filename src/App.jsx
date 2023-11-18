import { CrossIcon } from "./components/icons/CrossIcon";
import { MoonIcon } from "./components/icons/MoonIcon";
export const App = () => {
  return (
    <div className="bg-contain bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')] bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="font-semibold text-3xl uppercase text-white tracking-[0.5em]">
            Todo
          </h1>

          <button>
            <MoonIcon />
          </button>
        </div>

        <form className="bg-white rounded-md overflow-hidden mt-8 py-4 px-8 flex gap-4 items-center">
          <span className="rounded-full border-2 w-5 h-5 inline-block px-1"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="crea una nueva tarea"
          />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md px-4">
          <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">complete online JS NIAX0001</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">complete online JS NIAX0001</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">complete online JS NIAX0001</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 item left</span>
            <button className="text-gray-400">Clear Complete</button>
          </section>
        </div>
      </main>

      <section className="px-4 container mx-auto mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="text-center mt-8">Drag and Drop to reorder list</p>
    </div>
  );
};
