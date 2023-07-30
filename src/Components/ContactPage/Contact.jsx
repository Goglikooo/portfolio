import React from "react";
import styles from "./contact.module.css";
import inLogo from "../../assets/in.png";
import emailIcon from "../../assets/email.png";
import githubIcon from "../../assets/github.png";
import resume from "../../assets/resume.png";
import download from "../../assets/Goga_Gogeshvili_Resume.pdf";
export default function Contact() {
  return (
    <div className={styles.contact_wrapper}>
      <div className={styles.grateful_text_header}>
        <h1 className={styles.grateful_text}>Grateful for Your Visit!</h1>
        <div className={styles.circles}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
      <div className={styles.main_content}>
        <p className={styles.thank_you_text}>
          Thank you for exploring my website! As a passionate and aspiring
          developer, I'm constantly honing my skills to deliver exceptional web
          experiences.
        </p>
        <p className={styles.contact_text}>
          I sincerely appreciate your interest in my work. If you have any
          questions, collaboration ideas, or just want to connect, feel free to
          reach out through the links below.
        </p>

        <ul className={styles.contact_icons_together}>
          <li>
            <a
              href="mailto:goga.gogeshvili@gmail.com"
              className={styles.contact_links}
              target="_blank"
            >
              <img
                src={emailIcon}
                alt="email_icon"
                className={styles.contact_icon}
              />
              <span>email</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/goga-gogeshvili-ba787b96/"
              className={styles.contact_links}
              target="_blank"
            >
              <img
                src={inLogo}
                alt="email_icon"
                className={styles.contact_icon}
              />
              <span>linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Goglikooo"
              className={styles.contact_links}
              target="_blank"
            >
              <img
                src={githubIcon}
                alt="email_icon"
                className={styles.contact_icon}
              />
              <span>github</span>
            </a>
          </li>
          <li>
            <a href={download} className={styles.contact_links} download>
              <img
                src={resume}
                alt="email_icon"
                className={styles.contact_icon}
              />
              <span>resume</span>
            </a>
          </li>
        </ul>

        <p className={styles.farewell_text}>
          Looking forward to connecting and making the web awesome together!
        </p>
        <p className={styles.my_name_text}>- Goga</p>
        {/* <span className={styles.title_text}>Front-end Developer</span> */}
      </div>
    </div>
  );
}
