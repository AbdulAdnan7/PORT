import { motion } from "motion/react";



export function AnimatedBackground({ variant = "mixed", density = "medium" }) {
  const particleCount = density === "low" ? 15 : density === "medium" ? 25 : 40;
  
  const getColors = () => {
    switch (variant) {
      case "purple":
        return {
          from: "from-purple-500/10 dark:from-purple-500/5",
          to: "to-purple-300/10 dark:to-purple-700/5"
        };
      case "blue":
        return {
          from: "from-blue-500/10 dark:from-blue-500/5",
          to: "to-blue-300/10 dark:to-blue-700/5"
        };
      default:
        return {
          from: "from-purple-500/10 dark:from-purple-500/5",
          to: "to-blue-300/10 dark:to-blue-700/5"
        };
    }
  };

  const colors = getColors();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <motion.div
        className={`absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-linear-to-br ${colors.from} ${colors.to} rounded-full filter blur-3xl`}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-linear-to-tr from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full filter blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 dark:bg-purple-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
}
