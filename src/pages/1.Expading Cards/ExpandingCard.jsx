import { useEffect, useState } from "react";
import styles from "./ExpandingCard.module.css";

const listImages = [
  {
    id: 1,
    name: "Explore the world",
    img: "https://picsum.photos/500",
  },
  {
    id: 2,
    name: "Wild Forest",
    img: "https://picsum.photos/510",
  },
  {
    id: 3,
    name: "Explore the world",
    img: "https://picsum.photos/520",
  },
  {
    id: 4,
    name: "City on Winter",
    img: "https://picsum.photos/530",
  },
  {
    id: 5,
    name: "Mountain - Clouds",
    img: "https://picsum.photos/540",
  },
  {
    id: 6,
    name: "Sunny Beach",
    img: "https://picsum.photos/550",
  },
];

export const ExpandingCard = () => {
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    document.title = "Expanding Card";
  });

  return (
    <>
      <h1 className={styles.title}>Expanding Card</h1>
      <div className={styles.container}>
        {listImages.map((image) => {
          return (
            <div
              key={image.id}
              onClick={() => {
                setActiveImage(image.id);
              }}
              className={`${styles.panel} ${
                image.id === activeImage ? styles.active : ""
              }`}
              style={{ backgroundImage: `url(${image.img})` }}
            >
              <h3>{image.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
