import { useEffect, useState } from "react";
import styles from "./BlurryLoading.module.css";

// eslint-disable-next-line react/prop-types
export const BlurryLoading = ({ image = "https://picsum.photos/5000" }) => {
  useEffect(() => {
    document.title = "Blurry Loading";
  });

  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.blurred_img} ${loaded ? styles.loaded : ""}`}>
        <img
          // eslint-disable-next-line react/no-unknown-property
          onLoadStart={() => {
            setLoaded(false);
          }}
          onLoad={() => {
            setLoaded(true);
          }}
          src={image}
          loading="lazy"
        />
      </div>
    </div>
  );
};
