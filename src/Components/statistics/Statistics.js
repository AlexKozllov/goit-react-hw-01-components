import React from "react";
import styles from "./Statistics.module.css";
import rundomColor from "../../randomColor";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((item) => {
          return (
            <li
              key={item.id}
              className={styles.item}
              style={{ background: rundomColor() }}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
