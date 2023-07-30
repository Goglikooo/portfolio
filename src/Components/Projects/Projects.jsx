import React, { useState } from "react";
import styles from "./projects.module.css";
import inLogo from "../../assets/in.png";
import emailIcon from "../../assets/email.png";
import githubIcon from "../../assets/github.png";
import SingleProject from "../SingleProjectCard/SingleProject";
import popUpAdPic from "../../assets/europebet.jpg";
import devFinder from "../../assets/devfinder.jpg";
import cvMaker from "../../assets/redberry.jpg";
import travelo from "../../assets/travelo.jpg";
import interactiveCard from "../../assets/interavtiveCard.jpg";
import travelix from "../../assets/travelix.jpg";
import tipCalculator from "../../assets/tipcalculator.jpg";
import teamPage from "../../assets/teamPage.jpg";
import interiorDesign from "../../assets/interiorDesign.jpg";
import ratingComponent from "../../assets/ratingComponent.jpg";

export default function Projects() {
  const handleProjectClick = function (num) {
    setProjectCard(num);
    return true;
  };

  const projectList = [
    {
      name: "pop-up ad",
      photo: popUpAdPic,
      liveUrl: "https://goglikooo.github.io/europebet-pop-up/",
      gitHubUrl: "https://github.com/Goglikooo/europebet-pop-up",
    },
    {
      name: "devfinder",
      photo: devFinder,
      liveUrl: "https://goglikooo.github.io/git-user-search/",
      gitHubUrl: "https://github.com/Goglikooo/git-user-search",
    },
    {
      name: "cv maker",
      photo: cvMaker,
      liveUrl: "https://goglikooo.github.io/cv-maker/",
      gitHubUrl: "https://github.com/Goglikooo/cv-maker",
    },
    {
      name: "travelo",
      photo: travelo,
      liveUrl: "https://goglikooo.github.io/Travelo/",
      gitHubUrl: "https://github.com/Goglikooo/Travelo",
    },
    {
      name: "interactive card",
      photo: interactiveCard,
      liveUrl: "https://goglikooo.github.io/Interactive-card-details/",
      gitHubUrl: "https://github.com/Goglikooo/Interactive-card-details",
    },
    {
      name: "travelix",
      photo: travelix,
      liveUrl: "https://goglikooo.github.io/Tavelix/",
      gitHubUrl: "https://github.com/Goglikooo/Tavelix",
    },
    {
      name: "tip calculator",
      photo: tipCalculator,
      liveUrl: "https://goglikooo.github.io/tip-calculator/",
      gitHubUrl: "https://github.com/Goglikooo/tip-calculator",
    },
    {
      name: "team page",
      photo: teamPage,
      liveUrl: "https://github.com/Goglikooo/Team-Page/settings/pages",
      gitHubUrl: "https://github.com/Goglikooo/Team-Page",
    },
    {
      name: "interior design",
      photo: interiorDesign,
      liveUrl:
        "https://github.com/Goglikooo/Interior-Consultant/settings/pages",
      gitHubUrl: "https://github.com/Goglikooo/Interior-Consultant",
    },
    {
      name: "rating component",
      photo: ratingComponent,
      liveUrl: "https://goglikooo.github.io/Interactive-rating-component/",
      gitHubUrl: "https://github.com/Goglikooo/Interactive-rating-component",
    },
  ];
  const [projectCard, setProjectCard] = useState(1);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p className={styles.title}>Projects</p>
        <div className={styles.circles}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
      <div className={styles.underHeader}>
        <div className={styles.contact}>
          <a
            href="https://www.linkedin.com/in/goga-gogeshvili-ba787b96/"
            target="_blank"
          >
            <img src={inLogo} alt="" className={styles.cotactIcon} />
          </a>
          <a href="mailto:goga.gogeshvili@gmail.com">
            <img src={emailIcon} alt="" className={styles.cotactIcon} />
          </a>
          <a href="https://github.com/Goglikooo" target="_blank">
            <img src={githubIcon} alt="" className={styles.cotactIcon} />
          </a>
        </div>
        <div className={styles.prevNext}>
          <div
            className={styles.previous}
            onClick={() => {
              if (projectCard > 1) {
                setProjectCard(projectCard - 1);
              }
            }}
          ></div>
          <div
            className={styles.next}
            onClick={() => {
              if (projectCard < 10) {
                setProjectCard(projectCard + 1);
              }
            }}
          ></div>
        </div>
      </div>
      <div className={styles.content}>
        <ul className={styles.projectList}>
          {projectList.map((item, i) => {
            return (
              <li
                className={
                  i + 1 == projectCard
                    ? styles.projectNameActive
                    : styles.projectName
                }
                onClick={() => handleProjectClick(i + 1)}
                key={i}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        {projectList.slice(projectCard - 1, projectCard).map((item, i) => {
          return (
            <SingleProject
              photo={item.photo}
              liveUrl={item.liveUrl}
              gitHubUrl={item.gitHubUrl}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
