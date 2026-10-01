import React, { useState ,useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "../App";

const data = [
  {
    image: "/images/review/1.jpeg"
  },
  {
    image: "/images/review/2.jpeg"
  },
  {
    image: "/images/review/3.jpeg"
  },
  {
    image: "/images/review/4.jpeg"
  },
  {
    image: "/images/review/5.jpeg"
  }
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
    <section id="testimonials" className="testimonials section">
      <div className="container">

        <Reveal>
          <div className="pill">
            ◌ &nbsp; TESTIMONIALS
          </div>

          <h2>Trusted by Our Clients</h2>

          <p className="lead center">
            Feedback from Arkevion clients and interns who experienced
            practical delivery, clear communication, and measurable
            digital progress.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="testimonial-stage">

            {/* Previous */}
            <button
              className="testimonial-arrow"
              onClick={previous}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image Card */}
            <article className="testimonial-card image-card">
              <img
                src={data[n].image}
                alt="Arkevion testimonial"
                className="review-image"
              />
            </article>

            {/* Next */}
            <button
              className="testimonial-arrow"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

          </div>
        </Reveal>

        {/* Dots */}
        <div className="dots">
          {data.map((_, i) => (
            <span
              key={i}
              className={i === n ? "on" : ""}
              onClick={() => setN(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}