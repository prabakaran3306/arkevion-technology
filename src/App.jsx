import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Internship from "./components/Internship";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/chatbot";

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShow(true);
        io.disconnect();
      }
    }, { threshold: 0.12 });

    if (ref.current) io.observe(ref.current);

    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${show ? "show" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export const go = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth"
  });

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Internship />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Chatbot */}
      <Chatbot />

      {/* WhatsApp */}
      <a
        className="whatsapp"
        href="https://wa.me/918838749824"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/whatsapp.jpg"
          alt="WhatsApp"
        />
      </a>
    </>
  );
}
