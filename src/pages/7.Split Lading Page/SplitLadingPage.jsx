import { useEffect, useState } from "react";
import styles from "./SplitLadingPage.module.css";

export const SplitLadingPage = () => {

  useEffect(() => {
    document.title = "Split Lading Page"
  },[])

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
        <h1 className={styles.title}>Left Content</h1>
        <a href="#" className={styles.btn}>
          Details
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
        <h1 className={styles.title}>Right Content</h1>
        <a href="#" className={styles.btn}>
          Details
        </a>
      </div>
    </div>
  );
};
