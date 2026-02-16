import React from "react";
import Image from "next/image";
import NutritionOfferCard from "./NutritionOfferCard";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Custom Website Development",
    "Mobile Apps (iOS/Android)",
    "Desktop Applications",
    "UI/UX Design",
    "E-commerce Solutions",
    "CMS Development",
  ];

  return (
    <footer className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-t-2 border-yellow-600/30 text-yellow-100">
      {/* Profile */}
      <NutritionOfferCard />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-bold text-xl text-yellow-100 mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start text-base text-yellow-200/80"
                >
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl text-yellow-100 mb-5">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-base text-yellow-200/80 hover:text-yellow-100 focus:text-yellow-100 transition-colors duration-200"
                aria-label="Email us at your.email@example.com"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                sadarhussain0001@gmail.com
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center text-base text-yellow-200/80 hover:text-yellow-100 focus:text-yellow-100 transition-colors duration-200"
                aria-label="Call us at +1 (234) 567-890"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 76795-14423
              </a>

              <a
                href="https://forms.gle/u75vKD2WNnjkuFfe7"
                className="inline-block bg-yellow-600 text-yellow-100 text-base font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-yellow-900 transition-all duration-200 transform hover:scale-105"
                aria-label="Get a project quote"
              >
                Click to order
              </a>

              <div className="flex items-center text-base">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                <span className="text-yellow-200/80">
                  Available for projects
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-xl text-yellow-100 mb-5">Connect</h3>
            <div className="space-y-4">
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2.5 bg-yellow-950/50 rounded-lg border border-yellow-700/30 text-yellow-400 hover:text-pink-400 hover:bg-yellow-950/70 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-yellow-900 transition-all duration-200 transform hover:scale-110"
                  aria-label="Visit our Instagram profile"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="p-2.5 bg-yellow-950/50 rounded-lg border border-yellow-700/30 text-yellow-400 hover:text-blue-400 hover:bg-yellow-950/70 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-yellow-900 transition-all duration-200 transform hover:scale-110"
                  aria-label="Visit our Facebook profile"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/sadar-hussain0001"
                  className="p-2.5 bg-yellow-950/50 rounded-lg border border-yellow-700/30 text-yellow-400 hover:text-blue-500 hover:bg-yellow-950/70 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-yellow-900 transition-all duration-200 transform hover:scale-110"
                  aria-label="Visit our LinkedIn profile"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/Sadar0001"
                  className="p-2.5 bg-yellow-950/50 rounded-lg border border-yellow-700/30 text-yellow-400 hover:text-gray-300 hover:bg-yellow-950/70 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-yellow-900 transition-all duration-200 transform hover:scale-110"
                  aria-label="Visit our GitHub profile"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>

              {/* Blog Link */}
              <a
                href="#"
                className="inline-flex items-center text-base text-yellow-200/80 hover:text-yellow-100 focus:text-yellow-100 transition-colors duration-200"
                aria-label="Visit our development blog"
              >
                Development Blog
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-yellow-700/30 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-base text-yellow-200/70">
            © {currentYear} All Rights Reserved
          </p>
          <div className="text-base text-yellow-200/70">
            <span className="font-medium">Developer:</span> Sadar Hussain •
            <a
              href="tel:+1234567890"
              className="ml-2 hover:text-yellow-100 focus:text-yellow-100 transition-colors duration-200"
              aria-label="Call the developer at +1 (234) 567-890"
            >
              +91 76795-14423
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
