import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="block rounded-[30px] overflow-hidden border border-white/10 bg-black/40 cursor-pointer group"
    >
      {/* Top Section */}
      <div className="h-60 bg-gradient-to-br from-blue-500/30 to-purple-500/20 flex items-center justify-center text-6xl overflow-hidden">
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          transition={{ duration: 0.3 }}
        >
          💼
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="text-sm text-gray-400">
          {project.category}
        </p>

        <h3 className="text-2xl font-semibold mt-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.name}
        </h3>

        <p className="text-gray-500 mt-4 text-sm">
          Click to view live project →
        </p>
      </div>
    </motion.a>
  );
}