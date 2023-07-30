import React from "react";
import styles from "./SingleProject.module.css";
import linkIcon from "../../assets/link.png";

import githubIcon from "../../assets/github.png";

export default function SingleProject(props) {
  const { photo, liveUrl, gitHubUrl } = props;

  return (
    <div className={styles.project}>
      <div className={styles.border}>
        <div className={styles.projectCard}>
          <img
            src={photo}
            alt="project picture"
            className={styles.projectPic}
          />
          <div className={styles.linkIcons}>
            <a href={`${liveUrl}`} target="_blank">
              <img src={linkIcon} alt="link icon" className={styles.cardIcon} />
            </a>
            <a href={`${gitHubUrl}`} target="_blank">
              <img
                src={githubIcon}
                alt="github icon"
                className={styles.cardIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
