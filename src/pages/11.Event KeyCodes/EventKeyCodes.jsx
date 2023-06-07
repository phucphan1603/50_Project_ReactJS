import { useEffect, useState } from "react";
import styles from "./EventKeyCodes.module.css";

export const EventKeyCodes = () => {
  const [event, setEvent] = useState(null);

  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.title = "Event KeyCodes";
  }, []);

  const handleKeyDown = (e) => {
    e.preventDefault()
    setEvent(e);
  };

  return (
    <div className={styles.container}>
      <div id={styles.insert}>
        <div className={styles.key}>
          {event?.key === " " ? "Space" : event?.key ? event.key : "Not yet"}
          <small>event.key</small>
        </div>

        <div className={styles.key}>
          {event?.keyCode ?? "Not yet"}
          <small>event.keyCode</small>
        </div>

        <div className={styles.key}>
          {event?.code ?? "Not yet"}
          <small>event.code</small>
        </div>

        <div className={styles.key}>
          Press any key to get the keyCode and code
        </div>
      </div>
    </div>
  );
};
