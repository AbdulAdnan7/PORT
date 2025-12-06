import React from 'react'
import K from '/k.png'
import { Github, ExternalLink } from 'lucide-react';
import BuildingPill from './BuildingPill';

const Projects = () => {

    const projects = [
  {
    title: "Lusios",
    desc: "An Expense Manager App built with React + Tailwind",
    status: "Building",
    img: K,
    github: "https://github.com/AbdulAdnan7/portfolio",
    live: "https://your-portfolio.live",
  },
  {
    title: "Trip-Mind",
    desc: "Real-time Suggestions for planning trip abord",
        status: "Building",
    img: K,
    github: "https://github.com/AbdulAdnan7/weather",
    live: "https://weather-live.com",
  },
  {
    title: "TechXoM",
    desc: "MERN stack store with cart & authentication",
        status: "Building",
    img: K,
    github: "https://github.com/AbdulAdnan7/ecommerce",
    live: "https://ecom-live.com",
  },
];
    return (
        <div className='text-white bg-gray-950 py-4'>
            <div className='flex justify-center'>
                <h1 className='text-6xl'>Projects</h1>
            </div>

           <div className="grid grid-cols-1 m-6 sm:grid-cols-2 py-6 md:grid-cols-3 gap-6 place-items-center">

          {projects.map((p, index) => (
            <div 
              key={index} 
              className="border border-white/10 bg-white/5 p-4 rounded-xl text-center 
              hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full max-w-xs"
            >
              
              
              <img
                src={p.img}
                className="w-full h-36 object-cover rounded-lg"
                alt={p.title}
              />

           
              <h2 className="text-white font-semibold mt-3 flex items-center justify-center gap-2">{p.title} { p.status && <BuildingPill text={p.status} /> } </h2>

           
              <p className="text-white/60 text-sm mt-1">{p.desc}</p>

              
              <div className="flex justify-center gap-3 mt-4">
                
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white/80 hover:text-white 
                  border border-white/20 rounded-full px-3 py-1 text-sm transition-all"
                >
                  <Github className="w-4 h-4" /> Code
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white/80 hover:text-white 
                  border border-white/20 rounded-full px-3 py-1 text-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>

              </div>

            </div>
          ))}

        </div>

        </div>
    )
}

export default Projects
