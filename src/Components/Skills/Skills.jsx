import React from "react";
import styles from "./Skills.module.css";
import SingleSkillCard from "../SingleSkillCard/SingleSkillCard";
import HTMLIcon from "../../assets/html.png";
import CSSIcon from "../../assets/css.png";
import JSIcon from "../../assets/js.png";
import ReactIcon from "../../assets/react.png";
import TSIcon from "../../assets/ts.png";
import BootStrapIcon from "../../assets/bs.png";
import ResponsiveDesignIcon from "../../assets/rd.png";
import gitIcon from "../../assets/git.png";
import gitHubIcon from "../../assets/github.svg";
export default function Skills() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <SingleSkillCard title={"HTML"} icon={HTMLIcon} />
        </div>
        <div className={styles.item}>
          <SingleSkillCard title={"CSS"} icon={CSSIcon} />
        </div>
        <div className={styles.item}>
          <SingleSkillCard title={"JavaScript"} icon={JSIcon} />
        </div>
        <div className={styles.item}>
          <SingleSkillCard title={"TypeScript"} icon={TSIcon} />
        </div>
        <div className={styles.item}>
          <SingleSkillCard title={"React"} icon={ReactIcon} />
        </div>
        <div className={styles.item}>
          <SingleSkillCard title={"BootStrap"} icon={BootStrapIcon} />
        </div>
        <div className={styles.item}>
          <SingleSkillCard title={"Resp.Design"} icon={ResponsiveDesignIcon} />
        </div>
        <div className={styles.item}>
          <SingleSkillCard title={"Git"} icon={gitIcon} />
        </div>
        <div className={styles.item}>
          <SingleSkillCard title={"GitHub"} icon={gitHubIcon} />
        </div>
      </div>
    </div>
  );
}
