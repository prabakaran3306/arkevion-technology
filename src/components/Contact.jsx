import React from "react";
import {ArrowRight,Mail,Phone,MapPin} from "lucide-react";
import {Reveal} from "../App";
export default function Contact(){
 return <section id="contact" className="contact"><div className="contact-pattern"/><div className="container contact-inner">
   <Reveal><div className="pill darkpill">⌕ &nbsp; LET'S BUILD TOGETHER</div><h2>Have a project<br/><span>in mind?</span></h2><p>Share your website, software, automation, design, marketing, or internship requirement with Arkevion Technology and our team will guide the next step.</p><div className="contact-actions"><a className="main-btn" href="https://wa.me/918838749824">Start a conversation <ArrowRight/></a><a className="email-chip" href="mailto:arkeviontech@gmail.com">arkeviontech@gmail.com</a></div></Reveal>
 </div></section>
}