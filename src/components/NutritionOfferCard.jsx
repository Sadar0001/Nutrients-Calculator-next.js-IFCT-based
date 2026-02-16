import { motion } from "framer-motion";

export default function NutritionOfferCard() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gray-900/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-yellow-400/50 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(255,215,0,0.3)] transition-all duration-300 hover:border-yellow-400/70"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 text-center text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold underline decoration-yellow-400/60 underline-offset-4 mb-4 sm:mb-6 md:mb-8"
          >
            Transform Your Digital Presence
          </motion.h2>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
              <em className="text-yellow-300">Bring your vision to life</em> with our professional software development services!
              Our experienced team specializes in creating custom{" "}
              <u className="decoration-pink-400">web applications</u>,
              powerful <u className="decoration-pink-400">mobile apps</u>, and scalable{" "}
              <u className="decoration-pink-400">enterprise solutions</u>.
            </p>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
              Let us help you build{" "}
              <em className="text-yellow-300">cutting-edge technology solutions</em>—your ideas, our expertise.
            </p>

            {/* Call to Action */}
            <div className="pt-4 sm:pt-6 text-center">
              <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                  Get your free project quote today
                </strong>{" "}
                and start building your dream software!
              </p>

              {/* Optional CTA Button */}
              <motion.button
  onClick={() => window.open("https://forms.gle/u75vKD2WNnjkuFfe7", "_blank")}
  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255,215,0,0.4)" }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full hover:from-yellow-600 hover:to-pink-600 transition-all duration-300 shadow-[0_4px_15px_rgba(255,215,0,0.3)]"
>
  Order Now
</motion.button>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}