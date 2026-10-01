import React,{useState} from "react";
import {ChevronDown,ArrowRight,Menu,X} from "lucide-react";
import {go} from "../App";

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const links=[["Home","home"],["About","why-us"],["Services","services"],["Internship","internship"],["Testimonials","testimonials"],["Contact","contact"]];
  return <header className="navbar">
    <div className="nav-inner">
      <button className="logo-btn" onClick={()=>go("home")}><img src="/images/mainlogo.jpeg" /></button>
      <nav className={open?"open":""}>
        {links.map(([label,id],i)=><button key={label} className={label==="Home"?"active":""} onClick={()=>{go(id);setOpen(false)}}>{label}{label==="Services"&&<ChevronDown size={13}/>}</button>)}
      </nav>
      <div className="nav-right">
        <button className="hamburger" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
    </div>
  </header>;
}