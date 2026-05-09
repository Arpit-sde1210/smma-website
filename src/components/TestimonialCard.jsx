import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-[30px] border border-white/10 bg-white/5 p-8"
    >
      <div className="flex gap-1 text-yellow-400 text-xl mb-6">
        ⭐ ⭐ ⭐ ⭐ ⭐
      </div>

      <p className="text-gray-300 leading-relaxed text-lg">
        “{testimonial.review}”
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-bold">
          {testimonial.name}
        </h3>

        <p className="text-gray-400 mt-1">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
}