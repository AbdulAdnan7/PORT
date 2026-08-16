import React from "react";
import ST from "/ST.png";
import CITY from "/City.png";
const AboutMe = () => {
  return (
    <section className="py-16 scroll-mt-24" id="about">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-semibold">About Me</h1>
          <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl mx-auto">
            I'm Abdul Adnan, a full-stack developer who enjoys building clean, efficient web apps.
            I work with React, Node.js, Express, and MongoDB — preferring simple architecture and polished UI over complexity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Education */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-sm uppercase tracking-widest text-text-secondary mb-6">Education</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src={ST} alt="St. Joseph's" className="w-10 h-10 object-contain" />
                <div>
                  <p className="font-medium text-sm">St. Joseph's Degree College</p>
                  <p className="text-xs text-text-secondary mt-0.5">BCA · 2023 – 2026 · <span className="text-blue-400">Completed</span></p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={CITY} alt="City College" className="w-10 h-10 object-contain" />
                <div>
                  <p className="font-medium text-sm">Government City College</p>
                  <p className="text-xs text-text-secondary mt-0.5">Commerce · 2021 – 2023 · <span className="text-blue-400">Completed</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Activity */}


          <div className="bg-gradient-to-br from-rose-500/20 to-rose-300/10 border border-rose-400/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center">

            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-text-secondary mb-4">GitHub Activity</p>
              <img
                src="https://ghchart.rshah.org/f43f5e/AbdulAdnan7"
                alt="GitHub contributions"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

        </div>



      </div>
    </section>
  )
};

export default AboutMe;
