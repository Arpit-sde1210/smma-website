import { motion } from "framer-motion";
import StatsCard from "./StatsCard";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm mb-6">
              🚀 Digital Growth Agency
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              We Build Brands That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Actually Get Customers
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Helping businesses grow with websites, SEO and social media marketing.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-4 rounded-2xl bg-white text-black font-semibold"
              >
                Book Consultation
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-4 rounded-2xl border border-white/20 bg-white/5"
              >
                View Services
              </motion.button>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <StatsCard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}