import { useRef, useState } from "react";
import styles from "./RandomChoicePicker.module.css";

export const RandomChoicePicker = () => {
  const [tags, setTags] = useState(null);
  const [tagHighlight, setTagHighlight] = useState(null);
  const refArea = useRef(null);

  const onChange = (e) => {
    setTagHighlight(null);
    let tags = e.target.value?.split(",").filter(Boolean);
    setTags(tags);
  };

  function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();
      setTagHighlight(randomTag);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const randomTag = pickRandomTag();
        setTagHighlight(randomTag);
      }, 100);
    }, times * 100);
  }

  function pickRandomTag() {
    return Math.floor(Math.random() * tags?.length);
  }

  return (
    <div className={styles.container}>
      <h3>
        Enter all of the choices divided by a comma {","} <br /> Press enter
        when you are done
      </h3>
      <textarea
        ref={refArea}
        placeholder="Enter choices here..."
        id={styles.textarea}
        cols="30"
        rows="10"
        onChange={onChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setTimeout(() => {
              refArea.current.value = "";
            }, 10);
            randomSelect();
          }
        }}
      ></textarea>

      <div id={styles.tags}>
        {tags?.map((tag, index) => {
          return (
            <span
              key={`${tag}-${index}`}
              className={`${styles.tag} ${
                tagHighlight === index ? styles.highlight : ""
              }`}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};
