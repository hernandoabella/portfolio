import React from "react";
import Image from "next/image";

const MyWorks: React.FC = () => {
  return (
    <section className="py-10 px-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="py-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
          Showcase 🧑‍💼
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* project-card one */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="w-full h-48 md:h-64 relative mb-4">
              <Image
                src="/hoobank.png"
                layout="fill"
                alt=""
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Hoobank - Landing Page
            </h3>
            <p className="text-gray-600 mb-4">
              Description of your project. You can mention the technologies
              used, your role, and any relevant details. Include a link or
              button for more information.
            </p>
            <a href="#" className="text-blue-500 hover:underline block">
              Learn More
              <span>
                <i className="fa-regular fa-arrow-up-right-from-square ml-2"></i>
              </span>
            </a>{" "}
          </div>
          {/* project-card two */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="w-full h-48 md:h-64 relative mb-4">
              <Image
                src="/ntf-landing-page.png"
                layout="fill"
                alt=""
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">NTF - Landing-page</h3>
            <p className="text-gray-600 mb-4">
              Description of your project. You can mention the technologies
              used, your role, and any relevant details. Include a link or
              button for more information.
            </p>
            <a href="#" className="text-blue-500 hover:underline block">
              Learn More
              <span>
                <i className="fa-regular fa-arrow-up-right-from-square ml-2"></i>
              </span>
            </a>{" "}
          </div>
          {/* project-card three */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="w-full h-48 md:h-64 relative mb-4">
              <Image
                src="/coin-base.png"
                layout="fill"
                alt=""
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              CoinBase - Landing Page
            </h3>
            <p className="text-gray-600 mb-4">
              Description of your project. You can mention the technologies
              used, your role, and any relevant details. Include a link or
              button for more information.
            </p>
            <a href="#" className="text-blue-500 hover:underline block">
              Learn More
              <span>
                <i className="fa-regular fa-arrow-up-right-from-square ml-2"></i>
              </span>
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
