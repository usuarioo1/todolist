import { MoonIcon } from "./icons/IconMoon";
import { useEffect, useState } from "react";
import { IconSun } from "./icons/iconSun";

const iniciaStateDarkMode = localStorage.getItem('theme') === 'dark' 



export const Header = () => {

  const [darkMode, setDarkMode] = useState(iniciaStateDarkMode)
  useEffect(() => {
    if (darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="font-semibold text-3xl uppercase text-white tracking-[0.5em]">
          Todo
        </h1>

        <button onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <IconSun /> : <MoonIcon />
          }
        </button>
      </div>
    </header>
  );
};
