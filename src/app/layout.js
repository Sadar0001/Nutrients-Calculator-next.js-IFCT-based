"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import AnimatedTestimonials from "../components/AnimatedTestimonials";
import Footer from "../components/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-1">
        <div>
          <Navbar />
          <AnimatedTestimonials />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
