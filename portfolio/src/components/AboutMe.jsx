import React from "react";
import ST from '/ST.png'
import CITY from '/City.png'
const AboutMe = () => {
  return (
    <section className="bg-gray-950 py-4">
      <div className="z-10 max-w-6xl mx-auto px-4" id="about">


        <div className="flex justify-center mb-10">
          <h1 className="text-6xl text-white">About Me</h1>
        </div>


        <div className="mb-10 text-center">
          <h1 className="text-white text-lg leading-relaxed">
            Hello, World! I'm Abdul Adnan, a full-stack developer who enjoys
            building clean, efficient, and well-designed web applications. I
            focus on creating fast websites using React, Node.js,
            Express, and MongoDB. I prefer simple architecture, subtle
            animations, and polished UI over complexity. Currently sharpening my
            skills in the MERN stack.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white/5 border border-white/10 text-white p-6 rounded-2xl backdrop-blur-xl">
            <h2 className="text-xl font-semibold mb-6 tracking-tight">
              Education
            </h2>

        <div className="space-y-8">
  {/* Item */}
  <div className="flex items-start gap-6">
    <div className="w-16 h-16 flex items-center justify-center">
      <img
        src={ST}
        alt="St. Joseph's Degree College"
        className="max-w-full max-h-full object-contain"
      />
    </div>

    <div className="relative pl-5 border-l border-white/10">
      <p className="font-medium text-white">
        St. Joseph&apos;s Degree College — BCA
      </p>
      <p className="mt-1 text-sm text-white/60">
        2023 – 2026 ·{" "}
        <span className="text-emerald-400 font-medium">
          Ongoing
        </span>
      </p>
    </div>
  </div>

  {/* Item */}
  <div className="flex items-start gap-6">
    <div className="w-16 h-16 flex items-center justify-center">
      <img
        src={CITY}
        alt="Government City College"
        className="max-w-full max-h-full object-contain"
      />
    </div>

    <div className="relative pl-5 border-l border-white/10">
      <p className="font-medium text-white">
        Government City College — Commerce
      </p>
      <p className="mt-1 text-sm text-white/60">
        2021 – 2023 ·{" "}
        <span
          className="px-2 py-0.5 rounded-full text-xs
          text-blue-300 bg-blue-500/10 border border-blue-500/30"
        >
          Completed
        </span>
      </p>
    </div>
  </div>
</div>

          </div>





          <div className="bg-linear-to-br from-rose-500/20 to-rose-300/10
border border-rose-400/20 p-6 rounded-2xl backdrop-blur-xl
flex flex-col items-center justify-center text-center">

            {/* Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14.25L3.75 9.75 12 5.25l8.25 4.5L12 14.25z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9.75v4.5L12 19.5l8.25-5.25v-4.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-5.25"
              />
            </svg>

            <h3 className="text-white text-lg font-semibold mb-1">
              Graduation Project
            </h3>

            <p className="text-green-300/60 text-sm">
              ✦ Coming Soon ✦
            </p>
          </div>





        </div>
      </div>
    </section>
  );
};

export default AboutMe;
