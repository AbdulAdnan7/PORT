import React, { useState } from "react";
import K from "/k.png";
import Note from '/Notes.gif'
import { Github, ExternalLink } from "lucide-react";
import BuildingPill from "./BuildingPill";

const Projects = () => {

   const [activeTab, setActiveTab]= useState('projects')

  const projects = [
    {
      title: "Lusios",
      desc: "An expense manager app built with React and Tailwind CSS.",
      status: "Building",
      img: K,
      github: "https://github.com/AbdulAdnan7",
      live: "https://lusios.vercel.app",
    },
    {
      title: "Trip-Mind",
      desc: "Real-time smart suggestions for planning trips abroad. {Trip Mind}",
      status: "Building",
      img: K,
      github: "https://github.com/AbdulAdnan7",
      live: "https://peerabduladnans.vercel.app",
    },
    {
      title: "Notes",
      desc: "A fast, clean, and secure notes app for managing personal ideas.",
      status: "Completed",
      img: Note,
      github: "https://github.com/AbdulAdnan7",
      live: "https://notes-sepia-nu.vercel.app",
    },
  ];

  const designs = [
    {
      title: "Positivus",
      desc: "Modern saas landing page UI Only",
      status: "Building",
      img: K,
      github: "",
      live: "https://positivus-zeta-eight.vercel.app/",
    },
  ]

  const dataMap = {
    projects,
    designs
  }

  const tabs = [
    { key: 'projects', label: 'Web Apps' },
    { key: 'designs', label: 'UI Implementation', }
  ]

  const currentData = dataMap[activeTab] || []

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="text-white/50 mt-3">
            A selection of things I’m currently building
          </p>
        </div>

        {/** */}
        <div className="flex justify-center gap-6 mb-10">
         {
          tabs.map((tab) => (
            <button key={tab.key}
            onClick={() => setActiveTab(tab.key) }
             className={`pb-2 capitalize  transition ${
              activeTab === tab.key ? 'border-b-2 border-white text-white' : 'border-transparent text-white/50 hover:text-white'
             }`}
            >
              {tab.label}
            </button>
          ))
         }
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {currentData.map((p, index) => (
            <div
              key={index}
              className="group w-full max-w-sm rounded-2xl
      border border-white/10 bg-white/5 p-4 text-center
      transition-all duration-300
      hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Preview (GIF-safe) */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/20">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="mt-4 font-semibold flex items-center justify-center gap-2">
                {p.title}
                {p.status && <BuildingPill text={p.status} />}
              </h2>

              {/* Description */}
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {p.desc}
              </p>

              {/* Links */}
              <div className="mt-5 flex justify-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full
          border border-white/20 px-4 py-1.5 text-sm
          text-white/80 transition
          hover:text-white hover:border-white/40"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full
          border border-white/20 px-4 py-1.5 text-sm
          text-white/80 transition
          hover:text-white hover:border-white/40"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
