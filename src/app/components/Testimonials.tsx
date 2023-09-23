import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
          Client Testimonials ⭐
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="text-sm leading-6">
            <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                <p>
                <i className="fa-solid fa-quote-left"></i> He is an empathetic person who cares deeply about the results of his clients and always provides an incredible service. I recommend him 100% to anyone in need of digital services. <i className="fa-solid fa-quote-right"></i>
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-4">
                <div className="flex-none w-14 h-14 rounded-full object-fit">
                  <Image
                    src="/test1.jpg"
                    alt=""
                    width={56}
                    height={56}
                    className="flex-none w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-auto">
                  <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                    <a href="https://twitter.com/brethart" target="_blank">
                      <span className="absolute inset-0"></span>Bret &quot;The
                      Hitman&quot; Hart
                    </a>
                  </div>
                  <div className="mt-0.5">Former WWE Champion</div>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Testimonial 2 */}
          <div className="text-sm leading-6">
            <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                <p>
                <i className="fa-solid fa-quote-left"></i> One of the things I appreciate the most is its versatility in capturing what the client truly needs and what the client wants to convey and promote on their digital platforms. He is someone who works for you with love, dedication, commitment, and responsibility, and there is never a &quot;no&quot; for an answer. <i className="fa-solid fa-quote-right"></i>
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-4">
                <div className="flex-none w-14 h-14 rounded-full object-fit">
                  <Image
                    src="/test2.jpg"
                    alt=""
                    width={56}
                    height={56}
                    className="flex-none w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-auto">
                  <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                    <a href="https://twitter.com/lepikhinb" target="_blank">
                      <span className="absolute inset-0"></span>Boris Lepikhin
                    </a>
                  </div>
                  <div className="mt-0.5">Full-Stack Developer</div>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Testimonial 3 */}
          <div className="text-sm leading-6">
            <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                <p>
                <i className="fa-solid fa-quote-left"></i> We couldn&apos;t have made a better decision. Hernando has a great
                  human team: competent, responsible, and committed. The results
                  show the quality and experience of his work. <i className="fa-solid fa-quote-right"></i>
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-4">
                <div className="flex-none w-14 h-14 rounded-full object-fit">
                  <Image
                    src="/test3.jpg"
                    alt=""
                    width={56}
                    height={56}
                    className="flex-none w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-auto">
                  <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                    <a href="https://twitter.com/dacey_nolan">
                      <span className="absolute inset-0"></span>Dacey Nolan
                    </a>
                  </div>
                  <div className="mt-0.5">Software Engineer</div>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;