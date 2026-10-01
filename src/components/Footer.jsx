import React from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {

  const go = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const services = [
    "Web Development",
    "Full Stack Dev",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "AI Automation",
  ];

  const quickLinks = [
    ["About Us", "why-us"],
    ["Portfolio", "projects"],
    ["Internship", "internship"],
    ["Why Choose Us", "why-us"],
    ["Testimonials", "testimonials"],
    ["Contact", "contact"],
  ];

  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* =========================
            BRAND
        ========================= */}
        <div className="foot-brand">


          <p>
            Arkevion Technology builds modern websites, custom software,
            AI automation, UI/UX systems, and digital growth solutions
            for businesses ready to move beyond limits.
          </p>

          <div className="socials">

            <a
              href="https://www.linkedin.com/company/arkevion-technology/"
              aria-label="LinkedIn"
              onClick={(e) => e.preventDefault()}
            >
              <Linkedin />
            </a>

            <a
              href="https://www.instagram.com/arkeviontech.official?stkn=MW1ndHAxaW40dzR0ZA=="
              aria-label="Instagram"
              onClick={(e) => e.preventDefault()}
            >
              <Instagram />
            </a>

          </div>

        </div>


        {/* =========================
            SERVICES
        ========================= */}
        <div>

          <h4>Services</h4>

          {services.map((service) => (
            <a
              href="#services"
              key={service}
              onClick={(e) => {
                e.preventDefault();
                go("services");
              }}
            >
              {service}
            </a>
          ))}

        </div>


        {/* =========================
            QUICK LINKS
        ========================= */}
        <div>

          <h4>Quick Links</h4>

          {quickLinks.map(([label, id]) => (
            <button
              type="button"
              onClick={() => go(id)}
              key={label}
            >
              {label}
            </button>
          ))}

        </div>


        {/* =========================
            CONTACT
        ========================= */}
        <div>

          <h4>Contact</h4>

          <p>
            <MapPin />
            Trichy, Tamil Nadu, India
          </p>

          <p>
            <Phone />
            +91 88387 49824
          </p>

          <p>
            <Mail />
            arkeviontech@gmail.com
          </p>


          {/* WhatsApp */}
<a
  href="https://wa.me/918838749824"
  className="wa-card"
  target="_blank"
  rel="noreferrer"
>
  <img src="/images/whatsapp.jpg" alt="WhatsApp" />

  <span>
    WhatsApp
    <br />
    <b>Chat with us</b>
  </span>
</a>


          {/* MSME */}
          <div className="msme">
            <img src="images\msme1.png"></img>
          </div>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}
      <div className="footer-bottom">

        <span>
          © 2026 Arkevion Technology. All rights reserved.
        </span>

        <span>
          Privacy Policy
          &nbsp;&nbsp;&nbsp;
          Terms of Service
        </span>

      </div>

    </footer>
  );
}