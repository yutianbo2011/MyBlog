import React from "react";
import "./Footer.css";
import styleIcon from "../LinkIcon/LinkIcon.css";
import { LinkIcon } from "../LinkIcon/LinkIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faCopyright, faSkype, faCodepen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const [ linkedin, github, phone, email]  = [
    "https://www.linkedin.com/in/tianbo-yu-854a5b172/",
    "https://github.com/yutianbo2011",
    "+1 9794500916",
    "tianbo@tamu.edu",
  ];
  return (
    <footer className='footer'>
      <section className='container'>
        <div className='item'>
          <FontAwesomeIcon icon={faPhone} className='icon' />
          <p className='text'>Call</p>
          <p className='text'>{phone}</p>
        </div>
        <div className='item'>
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
          <p className='text'>Email</p>
          <p className='text'>{email}</p>
        </div>
        <div className='item'>
          <FontAwesomeIcon icon={faPlus} className='icon' />
          <p className='text'>Follow me on</p>
          <p>
            <LinkIcon
              href={linkedin}
              icon={faLinkedin}
              style='small'
            />
            <LinkIcon href={github} icon={faGithub} style='small' />
          </p>
        </div>
      </section>
    </footer>
  );
};