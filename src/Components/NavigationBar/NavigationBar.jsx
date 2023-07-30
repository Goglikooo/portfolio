import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/aboutme">about me</Link>
        </li>
        <li>
          <Link to="/skills">skills</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/trustAndy">trust Andy</Link>
        </li>
      </ul>
    </nav>
  );
}
