import React from "react";
import {
  ArrowRight,
  GraduationCap,
  Code2,
  Users,
  BriefcaseBusiness
} from "lucide-react";
import { Reveal } from "../App";

export default function Internship() {
  const internshipCards = [
    {
      title: "Real World",
      icon: Code2,
      description:
        "Work on real-world projects and gain hands-on experience by applying your technical skills to practical challenges."
    },
    {
      title: "Expert Mentorship",
      icon: Users,
      description:
        "Learn from experienced mentors through guidance, feedback and industry-focused knowledge."
    },
    {
      title: "Career Skills",
      icon: BriefcaseBusiness,
      description:
        "Develop essential technical, communication and professional skills to confidently prepare for your career."
    },
    {
      title: "Certificate",
      icon: GraduationCap,
      description:
        "Earn a recognized internship certificate that validates your learning, skills and practical project experience."
    }
  ];

  return (
    <section id="internship" className="internship section">
      <div className="container">

        <Reveal>
          <div className="pill">◉ &nbsp; INTERNSHIP</div>

          <h2>
            Learn. Build. <span>Grow.</span>
          </h2>

          <p className="lead">
            Gain practical experience by working on real projects with modern
            technologies, expert guidance and a portfolio you can be proud of.
          </p>
        </Reveal>

        <div className="intern-grid">
          {internshipCards.map((card, i) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={i * 70}>
                <div className="intern-card">

                  <Icon className="intern-icon" size={28} />

                  <b>{card.title}</b>

                  <p>{card.description}</p>

                </div>
              </Reveal>
            );
          })}
        </div>

        <button
          className="main-btn"
          onClick={() =>
            window.open(
              "https://forms.gle/MLkPqueXEnTZBthb6",
              "_blank"
            )
          }
        >
          Apply for Internship
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
}