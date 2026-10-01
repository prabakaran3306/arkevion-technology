import React from "react";
import {ArrowRight,GraduationCap,Code2,Users,BriefcaseBusiness} from "lucide-react";
import {Reveal} from "../App";
export default function Internship(){
 return <section id="internship" className="internship section"><div className="container">
   <Reveal><div className="pill">◉ &nbsp; INTERNSHIP</div><h2>Learn. Build. <span>Grow.</span></h2><p className="lead">Gain practical experience by working on real projects with modern technologies, expert guidance and a portfolio you can be proud of.</p></Reveal>
   <div className="intern-grid">
    {[["Real World",Code2],["Expert Mentorship",Users],["Career Skills",BriefcaseBusiness],["Certificate",GraduationCap]].map(([t,I],i)=><Reveal key={t} delay={i*70}><div><I/><b>{t}</b><p>Hands-on learning designed for real-world development.</p></div></Reveal>)}
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
  Apply for Internship <ArrowRight size={18} />
</button>
 </div></section>
}