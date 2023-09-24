import React from "react";
import Image from "next/image";

// ... importa las demás imágenes ...

const Toolbox: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-center py-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
          My ToolBox 🧰
        </h2>
        <div className="flex align-center justify-center gap-6">
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
              src="/javascript-original.svg"
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
              src="/mongodb-original.svg"
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
          <div>
            <Image
              src="/vercel.svg"
              alt=""
              width={56}
              height={56}
              className="w-16 h-16"
            />
          </div>
          <div>
            <Image
              src="/vercel.svg"
              alt=""
              width={56}
              height={56}
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
