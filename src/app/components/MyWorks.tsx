import React from "react";
import Image from "next/image";

const MyWorks: React.FC = () => {
  return (
    <section className="py-10 px-10 dark:bg-slate-900" id="projects">
      <div className="container mx-auto">
        <h2 className="pb-10 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
          Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* project-card one */}
          <div className="dark:bg-slate-800 rounded-lg shadow-lg">
            <div className="w-full h-48 md:h-64 relative mb-4">
              <Image
                src="/hoobank.png"
                width={500}
                height={500}
                alt="hoobank"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 dark:text-slate-50">
                Hoobank
              </h3>
              <p className="text-slate-400 mb-4">
                Responsive React JS application featuring a captivating hero
                section, high-quality visuals and gradients, key business
                statistics, reusable feature sections with compelling
                call-to-action buttons, genuine customer testimonials, and more.
              </p>
              <a
                href="https://hernandoabella.github.io/hoobank/"
                className="text-blue-500 hover:underline block"
              >
                <span>
                  <i className="fa-regular fa-arrow-up-right-from-square mr-2"></i>
                </span>
                Explore
              </a>{" "}
            </div>
          </div>
          {/* project-card two */}
          <div className="dark:bg-slate-800 rounded-lg shadow-lg">
            <div className="w-full h-48 md:h-64 relative mb-4">
              <Image
                src="/ntf-landing-page.png"
                width={500}
                height={500}
                alt="ntf"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 dark:text-slate-50">
                NTF
              </h3>
              <p className="text-slate-400 mb-4">
                This React-based NTF landing page is designed to be fully
                responsive. It showcases a striking hero section, top-notch
                graphics and gradients, essential business metrics, reusable
                feature sections with enticing call-to-action buttons, genuine
                customer endorsements, and more.
              </p>
              <a
                href="https://hernandoabella.github.io/ntf-landing-page/"
                className="text-blue-500 hover:underline block"
              >
                <span>
                  <i className="fa-regular fa-arrow-up-right-from-square mr-2"></i>
                </span>
                Explore
              </a>{" "}
            </div>
          </div>
          {/* project-card three */}
          <div className="dark:bg-slate-800 rounded-lg shadow-lg">
            <div className="w-full h-48 md:h-64 relative mb-4">
              <Image
                src="/coin-base.png"
                width={500}
                height={500}
                alt="coin-base"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 dark:text-slate-50">
                CoinBase
              </h3>
              <p className="text-slate-400 mb-4">
                An impressive CoinBase landing page CoinBase that adapts
                seamlessly to different screen sizes.
              </p>
              <a
                href="https://hernandoabella.github.io/coin-base/"
                className="text-blue-500 hover:underline block"
              >
                <span>
                  <i className="fa-regular fa-arrow-up-right-from-square mr-2"></i>
                </span>
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
