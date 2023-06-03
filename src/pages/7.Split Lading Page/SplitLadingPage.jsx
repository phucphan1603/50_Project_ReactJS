import { useState } from "react";
import styles from "./SplitLadingPage.module.css";

export const SplitLadingPage = () => {
  const [hoverPosition, setHoverPosition] = useState("");

  return (
    <div
      className={`${styles.container} ${
        hoverPosition === "left"
          ? styles.hover_left
          : hoverPosition === "right"
          ? styles.hover_right
          : ""
      }`}
    >
      <div
        onMouseEnter={() => {
          setHoverPosition("left");
        }}
        onMouseLeave={() => {
          setHoverPosition("");
        }}
        className={`${styles.split} ${styles.left} `}
      >
        <h1 className={styles.title}>Playstation 5</h1>
        <a href="#" className={styles.btn}>
          Buy Now
        </a>
      </div>

      <div
        onMouseEnter={() => {
          setHoverPosition("right");
        }}
        onMouseLeave={() => {
          setHoverPosition("");
        }}
        className={`${styles.split} ${styles.right}`}
      >
        <h1 className={styles.title}>XBox Series X</h1>
        <a href="#" className={styles.btn}>
          Buy Now
        </a>
      </div>
    </div>
  );
};
