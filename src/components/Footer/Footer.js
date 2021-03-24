import React from "react";
import styles from "./Footer.css";
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
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <p>Call</p>
          <p>{phone}</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <p>Email</p>
          <p>{email}</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faPlus} className={styles.icon} />
          <p>Follow me on</p>
          <p>
            <LinkIcon
              href={linkedin}
              icon={faLinkedin}
              style={styleIcon.small}
            />
            <LinkIcon href={github} icon={faGithub} style={styleIcon.small} />
          </p>
        </div>
      </section>
    </footer>
  );
};