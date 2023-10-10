import React from "react";
import Image from "next/image";

// ... importa las demás imágenes ...

const Toolbox: React.FC = () => {
  return (
    <section className="bg-white py-10 px-10">
      <div className="container mx-auto">
        <h2 className="mb-4 text-center py-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
          My ToolBox 🧰
        </h2>
        <div className="align-center justify-center gap-6">
          <div className="front-end py-4">
            <div className="flex items-center">
              <h3 className="py-4 text-2xl text-slate-600 font-extrabold tracking-tight dark:text-slate-50">
                FrontEnd
              </h3>
              <div className="w-full border-t-4 border-slate-100 ml-4 "></div>
            </div>

            <div className="flex justify-around">
              <div>
                <Image
                  src="/html5-original.svg"
                  alt="html"
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/css3-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/bootstrap-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/sass-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/tailwindcss-plain.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/javascript-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/typescript-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/react-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/angularjs-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/vuejs-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/nextjs-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>

          <div className="back-end py-4">
            <div className="flex items-center">
              <h3 className=" py-4 text-2xl text-slate-600 font-extrabold tracking-tight dark:text-slate-50">
                BackEnd
              </h3>
              <div className="w-full border-t-4 border-slate-100 ml-4"></div>
            </div>
            <div className="flex justify-around">
              <div>
                <Image
                  src="/express-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/nodejs-original-wordmark.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/mongodb-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>

          <div className="development-tools py-4">
            <div className="flex items-center">
              <h3 className="py-4 text-2xl text-slate-600 font-extrabold tracking-tight dark:text-slate-50">
                Development
              </h3>
              <div className="w-full border-t-4 border-slate-100 ml-4"></div>
            </div>
            <div className="flex justify-around">
              <div>
                <Image
                  src="/gulp-plain.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/markdown-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/git-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/github-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/docker-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/jest-plain.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/vercel-logotype-dark.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>

          <div className="design py-4">
            <div className="flex items-center">
              <h3 className="py-4 text-2xl text-slate-600 font-extrabold tracking-tight dark:text-slate-50">
                Design
              </h3>
              <div className="w-full border-t-4 border-slate-100 ml-4"></div>
            </div>
            <div className="flex justify-around">
              <div>
                <Image
                  src="/figma-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/canva-original.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/photoshop-plain.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/illustrator-plain.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Image
                  src="/xd-plain.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
