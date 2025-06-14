import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function LaunchingSoon() {
  return (
    <div className="flex justify-center items-center w-full px-4">
      <motion.div
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
      >
        {/* Outer pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-green-500/30"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Button */}
        <div className="relative bg-gray-700 border border-gray-700 rounded-full px-10 py-5 shadow-md">
          <div className="flex items-center space-x-4 text-white">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Clock className="w-6 h-6 text-green-400" />
            </motion.div>
            <span className="font-semibold text-lg tracking-wide">
              Launching Soon
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
