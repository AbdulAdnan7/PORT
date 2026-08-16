import React, { useState } from "react";
import K from "/k.png";
import Note from '/Notes.png'
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import BuildingPill from "./BuildingPill";
import { TechIcons } from './SkillSet'

const Projects = () => {

  const [activeTab, setActiveTab] = useState('projects')
  const projects = [
    {
      title: "Lusios",
      desc: "An expense manager app to take control of your finances.",
      problem: "Solves the problem of untracked daily spending and poor budgeting habits.",
      tech: ["React", "Tailwind CSS"],
      status: "Building",
      img: '/Lusios.png',
      github: "https://github.com/AbdulAdnan7",
      live: "https://lusios.vercel.app",
    },
    {
      title: "Vistree",
      desc: "A Smart System Architecture Planner and daily task manager.",
      problem: "Helps developers plan and visualize software architecture before building.",
      tech: ["NextJS", "Tailwind CSS"],
      status: "Building",
      img: '/vistree.png',
      github: "https://github.com/AbdulAdnan7",
      live: "https://vistree-mu.vercel.app/",
    },
    {
      title: "Notes",
      desc: "A fast, clean, and secure notes app for managing personal ideas.",
      problem: "A distraction-free alternative to bloated note-taking apps.",
      tech: ["React", "Session Storage"],
      status: "Completed",
      img: '/Notes.png',
      github: "https://github.com/AbdulAdnan7",
      live: "https://notes-sepia-nu.vercel.app",
    },
    {
      title: "Docucare",
      desc: "A WhatsApp-based business for printouts and online services.",
      problem: "Makes document printing and delivery accessible without visiting a shop.",
      tech: ["React", "Tailwind CSS"],
      status: "Completed",
      img: '/docucare.png',
      github: "https://github.com/AbdulAdnan7",
      live: "https://docucares.vercel.app",
    },
  ]

  const designs = [
    {
      title: "Positivus",
      desc: "Modern SaaS landing page UI.",
      problem: "A pixel-perfect implementation of a trending SaaS design.",
      tech: ["React", "Tailwind CSS"],
      status: "Building",
      img: '/Positivus.png',
      github: "",
      live: "https://positivus-zeta-eight.vercel.app/",
    },
    {
      title: "Elementum",
      desc: "A modern UI landing page from an assessment.",
      problem: "Built to demonstrate UI implementation skills from a design spec.",
      tech: ["React", "Tailwind CSS"],
      status: "Completed",
      img: '/elementum.png',
      github: "https://github.com/AbdulAdnan7/elementum",
      live: "https://elementums.vercel.app/",
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
      className="  py-16 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className=" mt-3">
            A selection of things I’m currently building
          </p>
        </div>

        {/** */}
        <div className="flex justify-center gap-6 mb-10">
          {
            tabs.map((tab) => (
              <button key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 capitalize  transition ${activeTab === tab.key ? 'border-b-2 text-text-primary' : 'border-transparent text-text-secondary'
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
            <div key={index} className="group w-full max-w-sm text-center transition-all duration-300 hover:-translate-y-1">

              {/* Image */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Title + status */}
              <h2 className="mt-4 font-semibold flex items-center justify-center gap-2">
                {p.title}
                {p.status && <BuildingPill text={p.status} />}
              </h2>

              {/* Desc */}
              <p className="mt-1 text-sm text-text-secondary leading-relaxed">{p.desc}</p>

              {/* Problem */}
              <p className="mt-1 text-xs text-text-secondary italic">{p.problem}</p>

              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {p.tech.map((t) => {
                  const Icon = TechIcons[t.replace(/\s/g, '').replace('.', '')]
                  return (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-text-secondary flex items-center gap-1">
                      {Icon && <Icon />}
                      {t}
                    </span>
                  )
                })}
              </div>

              {/* Links */}
              <div className="mt-4 flex justify-center gap-3">
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 px-4 py-1.5 text-sm hover:border-white/40 transition">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 px-4 py-1.5 text-sm hover:border-white/40 transition">
                  <ExternalLink className="w-4 h-4" /> Live
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
