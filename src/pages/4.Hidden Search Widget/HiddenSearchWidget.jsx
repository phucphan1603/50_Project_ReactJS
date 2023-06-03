import { useEffect, useState } from "react";
import styles from "./HiddenSearchWidget.module.css";

export const HiddenSearchWidget = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.title = "Hidden Search Widget";
  });

  return (
    <div className={styles.container}>
      <div className={`${styles.search} ${toggle ? styles.active : ""}`}>
        <input type="text" placeholder="Search..." className={styles.input} />
        <button
          className={styles.btn}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};
