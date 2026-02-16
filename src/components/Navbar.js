"use client";
import { motion } from "framer-motion";
import { IconCalendarPlus } from "@tabler/icons-react";

export default function DieticianHeader() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-4 sm:px-8 bg-gray-900/40 backdrop-blur-xl border-b border-gray-700/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
      role="banner"
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between w-full max-w-7xl">
        {/* Brand Name */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center"
        >
          <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            The Expert Dietician
          </span>
        </motion.a>

        {/* Book Appointment Button */}
        <motion.button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSejgu7eVRHVpki2UCwP1itdyjRxIz0uidmkqg-DDmiRCRGFSQ/viewform?usp=sharing&ouid=116462278181160617148 ",
              "_blank"
            )
          }
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full hover:from-yellow-600 hover:to-pink-600 transition-all duration-300 shadow-[0_4px_15px_rgba(255,215,0,0.3)] flex items-center gap-2"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 6px 20px rgba(255,215,0,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <IconCalendarPlus className="w-4 h-4" />
          Book Appointment
        </motion.button>
      </div>
    </header>
  );
}