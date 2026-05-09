import { motion } from "framer-motion";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-7 cursor-pointer"
    >
      <motion.div
        whileHover={{ rotate: 12 }}
        className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-2xl mb-6"
      >
        ⚡
      </motion.div>

      <h3 className="text-2xl font-semibold mb-4">
        {service.title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {service.desc}
      </p>
    </motion.div>
  );
}