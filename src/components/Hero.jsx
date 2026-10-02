import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../App";
import BackgroundAnimation from "./BackgroundAnimation";

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* Animated Background */}
      <BackgroundAnimation />

      {/* Existing Glow Effects */}
      <div className="hero-glow glow1"></div>
      <div className="hero-glow glow2"></div>

      {/* Hero Content */}
      <div className="container hero-grid">
        <Reveal>
          <div className="hero-copy">

            <h1 style={{ color: "#555555" }}>
            Arkevion
            <br />
            <span>Technology</span>
            </h1>

            <h3>beyond limits.</h3>

            <p>
              Arkevion Technology builds websites, applications,
              automation systems, design experiences, and growth
              campaigns that help businesses move beyond limits
              with clarity and confidence.
            </p>

            <button
              className="main-btn"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
              <ArrowRight size={18} />
            </button>

          </div>
        </Reveal>
      </div>

    </section>
  );
}