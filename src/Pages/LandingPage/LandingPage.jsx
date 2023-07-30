import React from "react";
import styles from "./LandingPage.module.css";
import AndyQuote from "../../Components/AndyQuote/AndyQuote";
import AboutMe from "../../Components/AboutMe/AboutMe";
import { Route, Routes, Link } from "react-router-dom";
import NavigationBar from "../../Components/NavigationBar/NavigationBar.jsx";
import Skills from "../../Components/Skills/Skills.jsx";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/ContactPage/Contact";
export default function LandingPage() {
  return (
    <div className={styles.body}>
      <header>
        <h1 className={styles.header}>Goga / front-end developer</h1>
      </header>

      <div className={styles.nav_plus_main}>
        <NavigationBar />

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<AndyQuote />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      <footer className={styles.footer}>
        <p>made with love by Goga</p>
      </footer>
    </div>
  );
}
