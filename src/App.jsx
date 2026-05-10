import { motion } from "framer-motion";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8052191085"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          whileHover={{
            scale: 1.1,
          }}
          className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center text-3xl shadow-2xl cursor-pointer"
        >
          💬
        </motion.div>
      </a>
    </>
  );
}

export default App;