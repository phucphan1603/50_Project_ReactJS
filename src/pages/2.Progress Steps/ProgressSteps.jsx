import { useEffect, useMemo, useState } from "react";
import styles from "./ProgressSteps.module.css";

let steps = [
  {
    id: 1,
    name: "",
  },
  {
    id: 2,
    name: "",
  },
  {
    id: 3,
    name: "",
  },
  {
    id: 4,
    name: "",
  },
  {
    id: 5,
    name: "",
  },
];

export const ProgressSteps = () => {
  const [currentActive, setCurrentActive] = useState(1);

  useEffect(() => {
    document.title = "Progress Steps"
  })

  const handleClickNext = () => {
    setCurrentActive((prev) => prev + 1);
    if (currentActive > steps.length) {
      setCurrentActive(steps.length);
    }
  };

  const handleClickPrev = () => {
    setCurrentActive((prev) => prev - 1);

    if (currentActive < 1) {
      setCurrentActive(1);
    }
  };

  const widthProgress = useMemo(() => {
    return ((currentActive - 1) / (steps.length - 1)) * 100;
  }, [currentActive]);

  return (
    <div className={styles.container}>
      <div className={styles.progress_container}>
        <div
          className={styles.progress}
          id={styles.progress}
          style={{
            width: `${widthProgress}%`,
          }}
        ></div>
        {steps.map((step, index) => {
          return (
            <div
              key={step.id}
              className={`${styles.circle} ${
                index < currentActive ? styles.active : ""
              }`}
            >
              {step.name || index + 1}
            </div>
          );
        })}
      </div>

      <div>
        <button
          className={styles.btn}
          onClick={handleClickPrev}
          id={styles.prev}
          disabled={currentActive === 1}
        >
          Prev
        </button>
        <button
          className={styles.btn}
          onClick={handleClickNext}
          id={styles.next}
          disabled={currentActive === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};
