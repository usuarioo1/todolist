import { MoonIcon } from "./icons/IconMoon";
export const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="font-semibold text-3xl uppercase text-white tracking-[0.5em]">
          Todo
        </h1>

        <button>
          <MoonIcon />
        </button>
      </div>
    </header>
  );
};
