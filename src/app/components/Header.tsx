// src/components/Header.tsx
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";


const Header: React.FC = () => {
  return (
    <header className="text-black p-6 dark:bg-slate-900 px-10">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="logo select-none text-xl dark:text-slate-50">Hernando Abella</h1>
        </div>
        <div className="md:hidden">
          <i className="fa fa-ellipsis-stroke cursor-pointer dark:text-slate-50"></i>
        </div>
        <div className="hidden md:flex items-center">
          <nav>
            <ul className="flex items-center gap-x-8 text-slate-500 dark:text-slate-300 text-sm font-semibold">
              <li>
                <a
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                  href="#education"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                  href="#experience"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Showcase
                </a>
              </li>

              <li>
                <a
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
            <ThemeSwitcher />
            <a
              href="https://x.com/hernandoabella"
              className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              title="x"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              href="https://github.com/hernandoabella"
              className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              title="github"
            >
              <i className="fa-brands fa-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
