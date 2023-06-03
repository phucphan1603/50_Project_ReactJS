import { useEffect, useState } from "react";
import styles from "./DadJokes.module.css";

export const DadJokes = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    generateJoke();
  }, []);

  function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    fetch("https://icanhazdadjoke.com", config)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
      });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>{`Don't Laugh Challenge`}</h3>
        <div id={styles.joke} className={styles.joke}>
          {/* //Joke goes here */}
          {joke}
        </div>
        <button
          id={styles.jokeBtn}
          onClick={() => generateJoke()}
          className={styles.btn}
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
};
