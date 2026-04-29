import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      
     {/* <div className="about center">
       
         <p className="about__desc" data-aos="fade-right">
              Strong problem-solving skills and ability to learn new technologies quickly. Seeking an opportunity to work 
          in a dynamic and collaborative team where I can leverage my skills and gain further experience in full-stack web development."
        </p> 
       <div className="about__contact center">
          <a
            href="https://github.com/Md-Irshad-Alam"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:almairsh0205@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917079355936"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/md-irshad-alam-761b491b9/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1Vbm_wmplkTCGzosxH_hUaD4nvkGrZNx-/view?usp=share_link"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
        </div>  
      </div>
        */}
        <div style={{textAlign:'center', marginBottom:'-80px'}}>
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Irshad Alam</span>
        </h1>
        <Type />
        </div>
     
      <div id="about">
       <Introduction />
       <Timeline />
      </div>
      <div id="skills" style={{marginTop:'100px'}}>
        <Techstacks />
      </div>
    </>
  );
};
