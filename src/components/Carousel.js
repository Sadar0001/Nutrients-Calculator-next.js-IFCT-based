"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample data array with proper placeholder images
const testimonialData = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Software Engineer",
    photo: "/1.jpg",
    rating: 5,
    content:
      "Very good service, yaar! The work was done on time and with proper quality. Truly satisfied with the effort.",
    reviewer: {
      name: "Rohit Verma",
      photo: "/1.jpg",
      date: "June 10, 2024",
    },
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Product Manager",
    photo: "/1.jpg",
    rating: 4,
    content:
      "Team was very cooperative and supportive. Project delivery was smooth, just needed a little more speed.",
    reviewer: {
      name: "Neha Iyer",
      photo: "/1.jpg",
      date: "July 15, 2024",
    },
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "UX Designer",
    photo: "/1.jpg",
    rating: 5,
    content:
      "Fantastic experience from start to finish. The designs were creative and exactly as per our Indian market needs.",
    reviewer: {
      name: "Ananya Gupta",
      photo: "/1.jpg",
      date: "August 22, 2024",
    },
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Marketing Director",
    photo: "/1.jpg",
    rating: 3,
    content:
      "Work was good, but communication could have been a bit faster. Overall, a decent experience.",
    reviewer: {
      name: "Karan Malhotra",
      photo: "/1.jpg",
      date: "September 5, 2024",
    },
  },
  {
    id: 5,
    name: "Arjun Nair",
    role: "Data Analyst",
    photo: "/1.jpg",
    rating: 5,
    content:
      "Bahut accha kaam kiya. The analysis was very detailed and accurate. Highly recommended!",
    reviewer: {
      name: "Simran Kaur",
      photo: "/1.jpg",
      date: "October 12, 2024",
    },
  },
  {
    id: 6,
    name: "Meera Joshi",
    role: "Business Analyst",
    photo: "/1.jpg",
    rating: 4,
    content:
      "Good communication throughout the project. They delivered what they promised, very reliable team.",
    reviewer: {
      name: "Vikram Desai",
      photo: "/1.jpg",
      date: "November 18, 2024",
    },
  },
  {
    id: 7,
    name: "Sandeep Kumar",
    role: "DevOps Engineer",
    photo: "/1.jpg",
    rating: 5,
    content:
      "Amazing dedication and proper attention to detail. Really happy with the overall outcome.",
    reviewer: {
      name: "Ayesha Khan",
      photo: "/1.jpg",
      date: "December 3, 2024",
    },
  },
  {
    id: 8,
    name: "Nisha Patel",
    role: "Frontend Developer",
    photo: "/1.jpg",
    rating: 4,
    content:
      "Team kaam karta hai with full professionalism. Delivery was on time and the quality was superb.",
    reviewer: {
      name: "Aditya Roy",
      photo: "/1.jpg",
      date: "January 8, 2025",
    },
  },
];

// Individual Card Component
const Card = ({ data }) => {
  return (
    <div
      className="w-full max-w-sm mx-auto bg-yellow-950/70 backdrop-blur-md border border-yellow-700/30 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.3),_0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),_0_0_25px_rgba(234,179,8,0.3)] hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
      role="article"
      aria-label="Testimonial card"
    >
      {/* Header */}
      <div className="flex items-center cursor-pointer w-full p-3 rounded-lg bg-yellow-900/50 border border-yellow-700/20 transition-all duration-200 hover:bg-yellow-900/70">
        <Image
          src={data.photo}
          alt={`${data.name} profile picture`}
          width={48}
          height={48}
          className="rounded-full object-cover border-2 border-yellow-600/50"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
              data.name
            )}&background=random&color=fff&size=48`;
          }}
        />
        <div className="ml-4 flex-1">
          <p className="text-base font-semibold text-yellow-100">{data.name}</p>
          <p className="text-sm text-yellow-200/80">{data.role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="my-6">
        <div
          className="flex space-x-1 justify-center"
          aria-label={`Rating: ${data.rating} out of 5 stars`}
        >
          {Array(data.rating)
            .fill()
            .map((_, i) => (
              <svg
                key={`filled-${i}`}
                className="w-5 h-5 text-yellow-400 animate-pulse"
                fill="currentColor"
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
          {Array(5 - data.rating)
            .fill()
            .map((_, i) => (
              <svg
                key={`empty-${i}`}
                className="w-5 h-5 text-yellow-700/50"
                fill="currentColor"
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
        </div>

        <p className="text-sm mt-5 leading-relaxed text-yellow-200/80">
          {data.content}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 border-t border-yellow-700/30 pt-4">
        <div className="flex items-center cursor-pointer flex-1">
          <Image
            src={data.reviewer.photo}
            alt={`${data.reviewer.name} profile picture`}
            width={32}
            height={32}
            className="rounded-full object-cover border-2 border-yellow-600/50"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                data.reviewer.name
              )}&background=random&color=fff&size=32`;
            }}
          />
          <p className="text-sm ml-3 text-yellow-100 font-medium">
            {data.reviewer.name}
          </p>
        </div>
        <p className="text-sm text-yellow-200/80">{data.reviewer.date}</p>
      </div>
    </div>
  );
};

// Main Carousel Component
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Handle responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(4);
      } else if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(testimonialData.length / cardsPerView)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  const maxIndex = Math.ceil(testimonialData.length / cardsPerView) - 1;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full py-16 bg-gradient-to-br from-yellow-900/20 to-yellow-800/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-800 text-center mb-12 animate-fade-in">
          Our Testimonials
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-950/70 backdrop-blur-md border border-yellow-700/30 rounded-full p-3 text-yellow-100 hover:bg-yellow-900/70 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-950/70 backdrop-blur-md border border-yellow-700/30 rounded-full p-3 text-yellow-100 hover:bg-yellow-900/70 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex *
                  (100 / Math.ceil(testimonialData.length / cardsPerView))
                }%)`,
                width: `${
                  Math.ceil(testimonialData.length / cardsPerView) * 100
                }%`,
              }}
            >
              {Array.from({
                length: Math.ceil(testimonialData.length / cardsPerView),
              }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`flex gap-6`}
                  style={{
                    width: `${
                      100 / Math.ceil(testimonialData.length / cardsPerView)
                    }%`,
                  }}
                >
                  {testimonialData
                    .slice(
                      slideIndex * cardsPerView,
                      (slideIndex + 1) * cardsPerView
                    )
                    .map((testimonial) => (
                      <div key={testimonial.id} className="flex-1">
                        <Card data={testimonial} />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: Math.ceil(testimonialData.length / cardsPerView),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                    : "bg-yellow-700/50 hover:bg-yellow-600/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
