import { useEffect, useRef, useState } from "react";
import styles from "./ScrollAnimation.module.css";

export const ScrollAnimation = () => {
  const [boxesActive, setBoxesActive] = useState([]);
  const refParent = useRef(null);

  useEffect(() => {
    document.title = "Scroll Animation";
  });

  useEffect(() => {
    const boxes = Array.from(refParent?.current.children).splice(
      1,
      refParent?.current.children.length
    );
    let boxesActive = [];
    let totalHeight = 0;
    boxes.forEach((box, index) => {
      const boxHeight = box.getBoundingClientRect().height;
      totalHeight += (boxHeight + 20);
      if (totalHeight < refParent?.current?.clientHeight) {
        boxesActive.push(index);
      }
    });
    setBoxesActive(boxesActive);
  }, [refParent?.current]);

  const checkBoxes = (e) => {
    const triggerBottom = (e.target.clientHeight / 5) * 4;

    Array.from(e.target.children)
      .splice(1, e.target.children.length)
      .forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          setBoxesActive((prev) => [...prev, index]);
        } else {
          setBoxesActive((prev) =>
            [...prev].filter((value) => value !== index)
          );
        }
      });
  };

  return (
    <div
      ref={refParent}
      className={styles.container}
      onScroll={(e) => checkBoxes(e)}
    >
      <h1>Scroll to see the animation</h1>
      {Array.from(Array(20)).map((item, index) => {
        return (
          <div
            key={index}
            className={`${styles.box} ${
              boxesActive.includes(index) ? styles.show : ""
            }`}
          >
            <h2>Content {index + 1}</h2>
          </div>
        );
      })}
    </div>
  );
};
