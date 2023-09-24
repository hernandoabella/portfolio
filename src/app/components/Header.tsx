// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black p-4 dark:bg-blue-900">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1>Hernando Abella</h1>
        </div>
        <div className="hidden md:flex items-center">
          <nav>
            <ul className="flex items-center gap-x-8 text-slate-500 hover:text-slate-600 text-sm font-semibold">
              <li>
                <a
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                  href="#experience"
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
                  href="https://tailwindui.com/?ref=top"
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Showcase
                </a>
              </li>
              {/* <li>
                <a
                  href="https://tailwindui.com/?ref=top"
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Side Projects
                </a>
              </li> */}
              <li>
                <a
                  href="https://tailwindui.com/?ref=top"
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
            <label
              className="sr-only"
              id="headlessui-listbox-label-:R1jeilb6:"
              data-headlessui-state=""
            >
              Theme
            </label>
            <button
              type="button"
              id="headlessui-listbox-button-:R2jeilb6:"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
              aria-labelledby="headlessui-listbox-label-:R1jeilb6: headlessui-listbox-button-:R2jeilb6:"
            >
              <i className="fa-sharp fa-solid fa-circle-half-stroke text-blue-500"></i>
            </button>
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
