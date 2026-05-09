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

      {/* IMAGE */}
      <div className="h-60 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
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