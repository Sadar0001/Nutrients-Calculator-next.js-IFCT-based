"use client";
 import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function LuxuryTestimonials() {
  const testimonials = [
    {
      quote:
        "Nutrition is the foundation of good health. For people with diabetes, the right diet can balance sugar levels, reduce complications, and improve quality of life.",
      name: "Why Nutrition Matters",
      designation: "Diabetes Care",
      src: "/2.jpg",
    },
    {
      quote:
        "Athletes need more than training – they need fuel. A sports nutrition plan boosts stamina, accelerates recovery, and prevents injuries.",
      name: "Power of Nutrition",
      designation: "Sports & Fitness",
      src: "/4.jpg",
    },
    {
      quote:
        "In today's busy lifestyle, most health problems come from poor eating habits. A dietitian helps design practical meal plans that fit into your daily routine.",
      name: "Healthy Living",
      designation: "Lifestyle & Wellness",
      src: "/3.jpg",
    },
    {
      quote:
        "Children need the right nutrition to grow smart and strong. Balanced meals enhance focus, immunity, and long-term development.",
      name: "Growing Right",
      designation: "Child Nutrition",
      src: "/6.jpg",
    },
    {
      quote:
        "Elderly people often need specialized diets to support bone health, digestion, and immunity. Nutrition ensures graceful and healthy ageing.",
      name: "Healthy Ageing",
      designation: "Senior Care",
      src: "/5.jpg",
    },
  ];

  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);

  // Auto slide every 5s
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [testimonials.length]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const isActive = (index) => index === active;

  const randomRotateY = () => Math.floor(Math.random() * 8) - 4;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative mx-auto px-5 py-16 sm:py-24 font-sans antialiased bg-gradient-to-b
      from-amber-950 via-stone-950 to-black min-h-screen flex items-center justify-center overflow-hidden"
      role="region"
      aria-label="Luxury Testimonials Section"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Side */}
          <div className="relative w-full h-[24rem] sm:h-[32rem] lg:h-[36rem]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    rotateY: randomRotateY(),
                    x: 50,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.9,
                    rotateY: isActive(index) ? 0 : randomRotateY(),
                    x: isActive(index) ? 0 : 20,
                    zIndex: isActive(index) ? 50 : testimonials.length - index,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.85,
                    rotateY: randomRotateY(),
                    x: -50,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                   
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={800} // Adjust based on max container size
                      height={600} // Adjust based on aspect ratio
                      unoptimized={testimonial.src.startsWith("http")} // Disable optimization for external images if needed
                      className="w-full h-full rounded-2xl object-cover object-center border border-gray-700/50 shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_15px_50px_rgba(0,0,0,0.5),_0_0_30px_rgba(255,215,0,0.3)]"
                      style={{
                        filter: isActive(index)
                          ? "brightness(1) contrast(1)"
                          : "brightness(0.7) contrast(0.9)",
                      }}
                    />
                    {/* Reflection Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Text Side */}
          <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.4),_0_0_25px_rgba(255,215,0,0.2)]">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-300 tracking-wide">
                {testimonials[active].name}
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300/80 mt-2">
                {testimonials[active].designation}
              </p>
              <motion.p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-gray-100/90 leading-relaxed">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(6px)", opacity: 0, y: 15 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      delay: 0.05 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            {/* Navigation */}
            <div className="flex gap-4 pt-8 sm:pt-10">
              <button
                onClick={handlePrev}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 focus:ring-4 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_20px_rgba(255,215,0,0.4)]"
                aria-label="Previous testimonial"
              >
                <IconArrowLeft className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:-translate-x-1" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 focus:ring-4 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_20px_rgba(255,215,0,0.4)]"
                aria-label="Next testimonial"
              >
                <IconArrowRight className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
