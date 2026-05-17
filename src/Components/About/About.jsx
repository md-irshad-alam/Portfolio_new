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
      <div id="skills">
        <Techstacks />
      </div>
    </>
  );
};
