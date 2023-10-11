import React from "react";
import Image from "next/image";

// ... importa las demás imágenes ...

const Toolbox: React.FC = () => {
  return (
    <section className="dark:bg-slate-900 py-10 px-10">
      <div className="container mx-auto">
        <h2 className="mb-4 text-center py-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
          My ToolBox
        </h2>
        <div className="align-center justify-center gap-6">
          <div className="front-end py-4">
            <div className="flex items-center">
              <h3 className="py-4 text-2xl text-slate-600 font-extrabold tracking-tight dark:text-slate-50">
                FrontEnd
              </h3>
              <div className="w-full border-t-4 border-slate-300 dark:border-slate-500 ml-4"></div>
            </div>

            <div className="flex justify-around">
              <div>
              <i className="devicon-html5-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-css3-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-tailwindcss-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-javascript-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-typescript-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-react-original text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-nextjs-original text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
            </div>
          </div>

          <div className="back-end py-4">
            <div className="flex items-center">
              <h3 className=" py-4 text-2xl text-slate-600 font-extrabold tracking-tight dark:text-slate-50">
                BackEnd
              </h3>
              <div className="w-full border-t-4 border-slate-300 dark:border-slate-500 ml-4"></div>
            </div>
            <div className="flex justify-around">
              <div>
              <i className="devicon-express-original text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-nodejs-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-mongodb-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-php-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-mysql-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
            </div>
          </div>

          <div className="development-tools py-4">
            <div className="flex items-center">
              <h3 className="py-4 text-2xl text-slate-600 font-extrabold tracking-tight dark:text-slate-50">
                Development
              </h3>
              <div className="w-full border-t-4 border-slate-300 dark:border-slate-500 ml-4"></div>
            </div>
            <div className="flex justify-around">
              <div>
              <i className="devicon-markdown-original text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-git-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-github-original text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-docker-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-jest-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-vscode-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
            </div>
          </div>

          <div className="design py-4">
            <div className="flex items-center">
              <h3 className="py-4 text-2xl text-slate-600 font-extrabold tracking-tight dark:text-slate-50">
                Design
              </h3>
              <div className="w-full border-t-4 border-slate-300 dark:border-slate-500 ml-4"></div>
            </div>
            <div className="flex justify-around">
              <div>
              <i className="devicon-figma-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-canva-original text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-photoshop-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-illustrator-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
              <div>
              <i className="devicon-xd-plain text-4xl md:text-6xl text-slate-600 dark:text-slate-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
