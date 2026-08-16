import { motion } from "motion/react"
import { Code2, Star, Rocket, Sparkles } from "lucide-react"

export function JourneyMap() {
  const journeySteps = [
    {
      year: "2023",
      title: "Discovered Coding",
      description: "Started learning web development and fell in love with creating digital experiences",
      icon: Star,
    },
    {
      year: "2024",
      title: "Built First Projects",
      description: "Created multiple personal projects and understood how things work",
      icon: Code2,
    },
    {
      year: "2025",
      title: "Deep-dived into Full Stack",
      description: "Gained expertise in React, Node.js, and modern web technologies through hands-on learning",
      icon: Rocket,
    },
    {
      year: "2026",
      title: "Ready for Opportunities",
      description: "Seeking my first role as a developer to apply my skills and grow professionally",
      icon: Sparkles,
      current: true,
    },
  ]

  return (
    <section className="py-16" id="journey">
      <div className="max-w-2xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-semibold text-center mb-16">My Journey</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-10">
            {journeySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 pl-12 relative"
                >
                  {/* Dot */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-surface border border-white/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-text-secondary" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-text-secondary uppercase tracking-widest">{step.year}</span>
                      {step.current && (
                        <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">Now</span>
                      )}
                    </div>
                    <h3 className="font-medium mb-1">{step.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default JourneyMap