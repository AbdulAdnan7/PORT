import { Code2, Star, Rocket, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function JourneyMap() {
  const [hoveredJourney, setHoveredJourney] = useState(null);

  const journeySteps = [
    {
      year: "2023",
      title: "Discovered Coding",
      description:
        "Started learning web development and fell in love with creating digital experiences",
      icon: Star,
      type: "education",
    },
    {
      year: "2024",
      title: "Built First Projects",
      description:
        "Created multiple personal projects and understands how things works",
      icon: Code2,
      type: "learning",
    },
    {
      year: "2025",
      title: "Mastered Full Stack",
      description:
        "Gained expertise in React, Node.js, and modern web technologies through hands-on learning",
      icon: Rocket,
      type: "achievement",
    },
    {
      year: "2026",
      title: "Ready for Opportunities",
      description:
        "Seeking my first role as a developer to apply my skills and grow professionally",
      icon: Sparkles,
      type: "current",
    },
  ];

  return (
    <section className="bg-gray-950 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h3 className="mb-12 text-6xl text-center text-white">
        My Journey
      </h3>

      {/* ================= DESKTOP VERSION ================= */}
    <div className="hidden md:block relative max-w-4xl mx-auto">
        {/* Winding Road Path - SVG */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          style={{ height: '800px' }}
          viewBox="0 0 400 800" 
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Road gradient with depth */}
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" className="dark:[stop-color:rgb(55,65,81)]" stopColor="rgb(156, 163, 175)" />
              <stop offset="50%" className="dark:[stop-color:rgb(75,85,99)]" stopColor="rgb(107, 114, 128)" />
              <stop offset="100%" className="dark:[stop-color:rgb(55,65,81)]" stopColor="rgb(156, 163, 175)" />
            </linearGradient>
            
            {/* Road edge gradient */}
            <linearGradient id="roadEdgeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" className="dark:[stop-color:rgb(31,41,55)]" stopColor="rgb(75, 85, 99)" />
              <stop offset="50%" className="dark:[stop-color:rgb(17,24,39)]" stopColor="rgb(55, 65, 81)" />
              <stop offset="100%" className="dark:[stop-color:rgb(31,41,55)]" stopColor="rgb(75, 85, 99)" />
            </linearGradient>

            {/* Shadow filter */}
            <filter id="roadShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
              <feOffset dx="0" dy="2" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Road Shadow */}
          <motion.path
            d="M 200 50 Q 100 150, 200 250 Q 300 350, 200 450 Q 100 550, 200 650 L 200 750"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="50"
            fill="none"
            strokeLinecap="round"
            filter="url(#roadShadow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Road Edges (darker border) */}
          <motion.path
            d="M 200 50 Q 100 150, 200 250 Q 300 350, 200 450 Q 100 550, 200 650 L 200 750"
            stroke="url(#roadEdgeGradient)"
            strokeWidth="48"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Main Road Surface */}
          <motion.path
            d="M 200 50 Q 100 150, 200 250 Q 300 350, 200 450 Q 100 550, 200 650 L 200 750"
            stroke="url(#roadGradient)"
            strokeWidth="42"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Dashed Center Line */}
          <motion.path
            d="M 200 50 Q 100 150, 200 250 Q 300 350, 200 450 Q 100 550, 200 650 L 200 750"
            stroke="#fbbf24"
            strokeWidth="4"
            fill="none"
            strokeDasharray="20, 15"
            strokeLinecap="round"
            className="dark:stroke-yellow-500"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          
          {/* Road Side Lines (white edges) */}
          <motion.path
            d="M 200 50 Q 100 150, 200 250 Q 300 350, 200 450 Q 100 550, 200 650 L 200 750"
            stroke="white"
            strokeWidth="52"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="0"
            opacity="0.4"
            className="dark:stroke-gray-600 dark:opacity-30"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Journey Steps - Positioned along the road */}
        <div className="relative" style={{ height: '800px' }}>
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            
            // Position calculations aligned with the winding road SVG path
            // SVG viewBox is "0 0 400 800"
            const positions = [
              { top: '6%', left: '50%' },      // Start: (200, 50)
              { top: '31%', left: '35%' },     // Left curve: around (140, 250)
              { top: '56%', left: '65%' },     // Right curve: around (260, 450)
              { top: '81%', left: '35%' },     // Left curve bottom: around (140, 650)
            ];
            
            const alignments = ['center', 'left', 'right', 'left'];
            
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: positions[index].top,
                  left: positions[index].left,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredJourney(index)}
                onMouseLeave={() => setHoveredJourney(null)}
              >
                {/* Milestone Marker */}
                <div className="relative flex flex-col items-center">
                  {/* Pulsing Point */}
                  <motion.div 
                    className="relative mb-4"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-950 border-4 border-gray-900 dark:border-white shadow-xl flex items-center justify-center relative z-20">
                      <motion.div
                        animate={hoveredJourney === index ? { rotate: 360 } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="size-8 text-gray-900 dark:text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Pulse Effect */}
                    {hoveredJourney === index && (
                      <>
                        <motion.div
                          className="absolute inset-0 w-16 h-16 rounded-full bg-gray-900 dark:bg-white"
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{ scale: 2, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute inset-0 w-16 h-16 rounded-full bg-gray-900 dark:bg-white"
                          initial={{ scale: 1, opacity: 0.3 }}
                          animate={{ scale: 2.5, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </>
                    )}
                  </motion.div>
                  
                  {/* Info Card */}
                  <motion.div
                    className={`w-64 ${alignments[index] === 'center' ? 'text-center' : alignments[index] === 'left' ? 'text-left' : 'text-right'}`}
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-2xl transition-all rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{step.year}</span>
                          {index === journeySteps.length - 1 && (
                            <motion.div
                              className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <span className="text-xs text-green-600 dark:text-green-400 font-medium">Now</span>
                            </motion.div>
                          )}
                        </div>
                        <h4 className="text-gray-900 dark:text-white mb-2 font-medium">{step.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Destination Flag */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl"
            >
              🏁
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================= MOBILE VERSION ================= */}
   <div className="md:hidden w-full overflow-hidden">
        <div className="relative w-full px-2">
          {/* Winding Road Path - Mobile SVG */}
          <svg 
            className="w-full h-auto pointer-events-none mx-auto" 
            style={{ maxWidth: '400px' }}
            viewBox="0 0 300 900" 
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Road gradient with depth */}
              <linearGradient id="roadGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className="dark:[stop-color:rgb(55,65,81)]" stopColor="rgb(156, 163, 175)" />
                <stop offset="50%" className="dark:[stop-color:rgb(75,85,99)]" stopColor="rgb(107, 114, 128)" />
                <stop offset="100%" className="dark:[stop-color:rgb(55,65,81)]" stopColor="rgb(156, 163, 175)" />
              </linearGradient>
              
              {/* Road edge gradient */}
              <linearGradient id="roadEdgeGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className="dark:[stop-color:rgb(31,41,55)]" stopColor="rgb(75, 85, 99)" />
                <stop offset="50%" className="dark:[stop-color:rgb(17,24,39)]" stopColor="rgb(55, 65, 81)" />
                <stop offset="100%" className="dark:[stop-color:rgb(31,41,55)]" stopColor="rgb(75, 85, 99)" />
              </linearGradient>

              {/* Shadow filter */}
              <filter id="roadShadowMobile">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="0" dy="1" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Road Shadow */}
            <motion.path
              d="M 150 50 Q 80 150, 150 250 Q 220 350, 150 450 Q 80 550, 150 650 Q 220 750, 150 850"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="40"
              fill="none"
              strokeLinecap="round"
              filter="url(#roadShadowMobile)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Road Edges (darker border) */}
            <motion.path
              d="M 150 50 Q 80 150, 150 250 Q 220 350, 150 450 Q 80 550, 150 650 Q 220 750, 150 850"
              stroke="url(#roadEdgeGradientMobile)"
              strokeWidth="38"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Main Road Surface */}
            <motion.path
              d="M 150 50 Q 80 150, 150 250 Q 220 350, 150 450 Q 80 550, 150 650 Q 220 750, 150 850"
              stroke="url(#roadGradientMobile)"
              strokeWidth="34"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Dashed Center Line */}
            <motion.path
              d="M 150 50 Q 80 150, 150 250 Q 220 350, 150 450 Q 80 550, 150 650 Q 220 750, 150 850"
              stroke="#fbbf24"
              strokeWidth="3"
              fill="none"
              strokeDasharray="15, 12"
              strokeLinecap="round"
              className="dark:stroke-yellow-500"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            />
            
            {/* Road Side Lines (white edges) */}
            <motion.path
              d="M 150 50 Q 80 150, 150 250 Q 220 350, 150 450 Q 80 550, 150 650 Q 220 750, 150 850"
              stroke="white"
              strokeWidth="42"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="0"
              opacity="0.4"
              className="dark:stroke-gray-600 dark:opacity-30"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
          
          {/* Journey Steps - Positioned along the mobile road */}
          <div className="relative w-full mx-auto" style={{ maxWidth: '400px', marginTop: '-900px', height: '900px' }}>
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              
              // Position calculations aligned with the mobile winding road SVG path
              // SVG viewBox is "0 0 300 900"
              const positions = [
                { top: '5.5%', left: '50%' },     // Start: (150, 50)
                { top: '27.8%', left: '27%' },    // Left curve: around (80, 250)
                { top: '50%', left: '50%' },      // Right curve: around (150, 450) - centered to stay in frame
                { top: '72.2%', left: '27%' },    // Left curve: around (80, 650)
              ];
              
              const alignments = ['center', 'left', 'center', 'left'];
              
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: positions[index].top,
                    left: positions[index].left,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  onMouseEnter={() => setHoveredJourney(index)}
                  onMouseLeave={() => setHoveredJourney(null)}
                >
                  {/* Milestone Marker */}
                  <div className="relative flex flex-col items-center">
                    {/* Pulsing Point */}
                    <motion.div 
                      className="relative mb-2"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-950 border-3 sm:border-4 border-gray-900 dark:border-white shadow-xl flex items-center justify-center relative z-20">
                        <motion.div
                          animate={hoveredJourney === index ? { rotate: 360 } : {}}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="size-4 xs:size-5 sm:size-6 text-gray-900 dark:text-white" />
                        </motion.div>
                      </div>
                      
                      {/* Pulse Effect */}
                      {hoveredJourney === index && (
                        <>
                          <motion.div
                            className="absolute inset-0 w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-gray-900 dark:bg-white"
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute inset-0 w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-gray-900 dark:bg-white"
                            initial={{ scale: 1, opacity: 0.3 }}
                            animate={{ scale: 2.5, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </>
                      )}
                    </motion.div>
                    
                    {/* Info Card */}
                    <motion.div
                      className={`w-[160px] xs:w-[180px] sm:w-[220px] ${alignments[index] === 'center' ? 'text-center' : alignments[index] === 'left' ? 'text-left' : 'text-right'}`}
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-2xl transition-all rounded-lg">
                        <div className="p-2 xs:p-2.5 sm:p-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{step.year}</span>
                            {index === journeySteps.length - 1 && (
                              <motion.div
                                className="px-1 py-0.5 xs:px-1.5 sm:px-2 bg-green-100 dark:bg-green-900/30 rounded-full"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-green-600 dark:text-green-400 font-medium">Now</span>
                              </motion.div>
                            )}
                          </div>
                          <h4 className="text-gray-900 dark:text-white mb-1 font-medium text-[10px] xs:text-[11px] sm:text-xs leading-tight">{step.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-[8px] xs:text-[9px] sm:text-[10px] leading-snug">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Destination Flag - Mobile */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ bottom: '3%' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-3xl xs:text-4xl sm:text-5xl"
              >
                🏁
              </motion.div>
            </motion.div>
          </div>
        </div>
        </div>
    </motion.div>
    </section>
  );
}

export default JourneyMap;
