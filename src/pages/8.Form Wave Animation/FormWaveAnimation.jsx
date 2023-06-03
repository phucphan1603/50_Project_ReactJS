import styles from "./FormWaveAnimation.module.css";

// eslint-disable-next-line react/prop-types
const InputWave = ({ label, type = "text", required = false, id = "" }) => {
  function textSplit(text) {
    if (!text) return;
    return text.split("").map((letter, idx) => {
      return (
        <span
          style={{ transitionDelay: `${idx * 50}ms` }}
          key={`${letter}-${idx}`}
        >
          {letter}
        </span>
      );
    });
  }
  return (
    <div className={styles.form_control}>
      <input type={type} id={id} required={required} />
      <label htmlFor={id}>{textSplit(label)}</label>
    </div>
  );
};

export const FormWaveAnimation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Please Login</h1>
        <form action="">
          <InputWave label="Email" required />
          <InputWave type="password" label="Password" required />
          <button className={styles.btn}>Login</button>
          <p className={styles.text}>
            {`Don't have an account?`} <a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};
