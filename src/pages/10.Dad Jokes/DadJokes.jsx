import { useEffect, useState } from "react";
import styles from "./DadJokes.module.css";
import { Loading } from "../../components/Loading";

export const DadJokes = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateJoke();
    document.title = "Dad jokes";
  }, []);

  function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    setLoading(true);

    fetch("https://icanhazdadjoke.com", config)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>{`Don't Laugh Challenge`}</h3>
        <div id={styles.joke} className={styles.joke}>
          {/* //Joke goes here */}
          {loading ?  <Loading width={50} height={50} /> : joke}
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
