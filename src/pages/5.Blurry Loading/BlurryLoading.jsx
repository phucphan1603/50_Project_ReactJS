import { useEffect, useState } from "react";
import styles from "./BlurryLoading.module.css";

export const BlurryLoading = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    document.title = "Blurry Loading";
  });
  useEffect(() => {
    let int = setInterval(() => {
      load > 100 ? null : setLoad((prev) => prev + 1);
    }, 50);
    if (load > 99) {
      clearInterval(int);
      setLoad(100);
    }
  }, [load]);

  const scale = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  return (
    <div className={styles.container}>
      <section
        style={{
          filter: `blur(${scale(load, 0, 100, 30, 0)}px)`,
        }}
        className={styles.bg}
      ></section>
      <div
        style={{
          opacity: scale(load, 0, 100, 1, 0),
        }}
        className={styles.loading_text}
      >
        {load}%
      </div>
    </div>
  );
};
