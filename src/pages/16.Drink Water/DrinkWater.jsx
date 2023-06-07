import { useState } from "react";
import styles from "./DrinkWater.module.css";
import { useMemo } from "react";

const listCup = [
  {
    id: 1,
    text: "250ml",
  },
  {
    id: 2,
    text: "250ml",
  },
  {
    id: 3,
    text: "250ml",
  },
  {
    id: 4,
    text: "250ml",
  },
  {
    id: 5,
    text: "250ml",
  },
  {
    id: 6,
    text: "250ml",
  },
  {
    id: 7,
    text: "250ml",
  },
  {
    id: 8,
    text: "250ml",
  },
];

const LitterGoalDefault = 2;

export const DrinkWater = () => {
  const [cupsSelected, setCupSelected] = useState([]);

  const literGoal = useMemo(() => {
    if (cupsSelected?.length) {
      return LitterGoalDefault - cupsSelected?.length * 0.25;
    }
    return LitterGoalDefault;
  }, [cupsSelected]);

  const percentage = useMemo(() => {
    if (cupsSelected?.length) {
      return ((cupsSelected?.length * 0.25) / LitterGoalDefault) * 100;
    }
    return 0;
  }, [cupsSelected]);

  return (
    <div className={styles.container}>
      <h1>Drink Water</h1>
      <h3>Gold: 2 Liters</h3>

      <div className={styles.cup}>
        {percentage === 100 ? null : (
          <div className={styles.remained} id={styles.remained}>
            {literGoal ? <div id={styles.liters}>{literGoal}L</div> : null}
            <small>Remained</small>
          </div>
        )}
        {percentage ? (
          <div
            style={{ height: `${percentage}%` }}
            className={styles.percentage}
            id={styles.percentage}
          >
            {percentage}%
          </div>
        ) : null}
      </div>

      <p className={styles.text}>
        Select how many glasses of the water that you have drink
      </p>

      <div className={styles.cups}>
        {listCup.map((cup) => {
          return (
            <div
              onClick={() => {
                let _cups = [...cupsSelected];

                let index = _cups.findIndex((item) => item === cup.id);

                if (index > -1) {
                  if (_cups?.length && _cups.includes(cup.id)) {
                    _cups.splice(index, 1);
                  }
                } else {
                  _cups.push(cup.id);
                }
                setCupSelected(_cups);
              }}
              key={cup.id}
              className={`${styles.cup} ${styles.cup_small} ${
                cupsSelected?.includes(cup.id) ? styles.full : ""
              }`}
            >
              {cup.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
