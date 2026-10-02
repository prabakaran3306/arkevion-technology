import React from "react";

import {
  CircleCheck,
  ShieldCheck,
  Rocket,
  Clock3,
} from "lucide-react";

import { Reveal } from "../App";

const cards = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "Rigorous QA and code reviews on every project. We never compromise on quality.",
  },
  {
    icon: Rocket,
    title: "On-Time Delivery",
    description:
      "Agile process that respects your deadlines. We deliver what we promise, when we promise.",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    description:
      "Post-launch support so you never hit a wall. We're always here when you need us.",
  },

];

export default function WhyUs() {
  return (
    <section id="why-us" className="why section">
      <div className="container">

        {/* Section Heading */}
        <Reveal>
          <div className="pill">
            ⓘ &nbsp; ABOUT
          </div>

          <h2>
            Built <span>different.</span>
            <br />
            Delivered better.
          </h2>

          <p className="lead">
            We build reliable digital solutions that help businesses grow.
            From planning to deployment, we focus on quality, performance,
            and long-term support to ensure your project succeeds.
          </p>
        </Reveal>

        {/* Vision & Mission */}
        <div className="bullet-grid">

  {/* OUR VISION */}
  <Reveal delay={35}>
    <div className="vision-box">

      <div className="vision-header">
        <div className="vision-icon">
          <CircleCheck size={22}  />
        </div>

        <h3>OUR VISION</h3>
      </div>

      <p className="vision-text">
        Establish Arkevion Technology as a globally recognized and
        trusted technology <strong>brand</strong>, delivering
        excellence through <strong>innovation</strong>,
        <strong> quality</strong>, and sustainable growth.
      </p>

    </div>
  </Reveal>


  {/* OUR MISSION */}
  <Reveal delay={70}>
    <div className="vision-box">

      <div className="vision-header">
        <div className="vision-icon">
          <CircleCheck size={22} />
        </div>

        <h3>OUR MISSION</h3>
      </div>

      <p className="vision-text">
        To empower businesses through innovative and reliable
        technology solutions, delivering exceptional quality,
        timely execution, and lasting value to our clients.
      </p>

    </div>
  </Reveal>

</div>
        {/* Why Choose Us Cards */}
        <div className="why-cards">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal
                key={card.title}
                delay={index * 70}
              >
                <article className="why-card">

                  <div className="card-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{card.title}</h3>

                  <p>{card.description}</p>

                </article>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}