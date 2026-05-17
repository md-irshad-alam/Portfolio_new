import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);
 
  return (
    <>
      <div className={"contactcontainer2 " + themename} data-aos="fade-right">
        <a
          href="https://www.linkedin.com/in/md-irshad-alam-761b491b9/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="linkedin" />
        </a>
        <a
          href="https://github.com/Md-Irshad-Alam"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithub className="github" />
        </a>
        <a
          href="mailto:almairsh0205@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <CgMail className="email" />
        </a>
        <a
          href="https://leetcode.com/u/Alam_25/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode className="leetcode" />
        </a>
        <a href="tel:+917079355936" target="_blank" rel="noreferrer">
          <BsFillTelephoneFill className="phone" />
        </a>
      </div>
    </>
  );
};
