import React from "react";
import styles from "./SingleSkillCard.module.css";
import htmlicon from "../../assets/html.png";
export default function SingleSkillCard(props) {
  const { title, icon } = props;

  return (
    <div className={styles.main}>
      <div className={styles.cardHead}>
        <p className={styles.title}>{title}</p>
        <div className={styles.circles}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
      <img src={icon} alt="html icon" className={styles.icon} />
    </div>
  );
}
