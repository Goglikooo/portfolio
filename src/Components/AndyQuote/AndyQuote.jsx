import React from "react";
import styles from "./AndyQuote.module.css";
export default function AndyQuote() {
  return (
    <div>
      <p className={styles.quote}>
        "They always say time changes things, but you actually have to change
        them yourself."
      </p>
      <p className={styles.andy}>
        <em>-Andy Warhol</em>
      </p>
    </div>
  );
}
