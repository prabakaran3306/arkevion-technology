import React, {useState,useEffect} from "react";
import {
  Code2,
  Smartphone,
  Palette,
  BarChart3,
  BrainCircuit,
  Cloud,
  Database,
} from "lucide-react";

import { Reveal } from "../App";

const data = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive and conversion-focused websites for modern businesses.",
  },
  {
    icon: Code2,
    title: "Full Stack Dev",
    description:
      "Complete frontend and backend applications with scalable architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "User-friendly mobile applications built for performance and growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces that make every digital interaction simple.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Growth campaigns that connect your brand with the right audience.",
  },
  {
    icon: BrainCircuit,
    title: "AI Automation",
    description:
      "Smart workflows and automation systems that save time and improve efficiency.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Secure, reliable cloud deployment and infrastructure.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Structured data systems designed for speed and long-term reliability.",
  },
];

export default function Testimonials() {
  const [n, setN] = useState(0);

  const previous = () => {
    setN((n - 1 + data.length) % data.length);
  };

  const next = () => {
    setN((n + 1) % data.length);
  };

  // Automatic slider
  useEffect(() => {
    const timer = setInterval(() => {
      setN((prev) => (prev + 1) % data.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, []);


  return (
    <section id="services" className="section services">
      <div className="container">

        {/* Section Heading */}
        <Reveal>
          <div className="pill">✧ &nbsp; SERVICES</div>

          <h2>
            What we <span>do.</span>
          </h2>

          <p className="lead center">
            From websites to automation, we provide practical technology
            services that help businesses grow.
          </p>
        </Reveal>

        {/* Services */}
        <div className="service-grid">
          {data.map((service, i) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={i * 45}>
                <article className="service-card">

                  <div className="service-icon">
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-link">
                    Explore <span className="arrow">→</span>
                  </span>

                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}