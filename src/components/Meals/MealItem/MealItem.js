import React from "react";
import styles from "./MealItem.module.css";

export default function MealItem({ name, description, price }) {
  const priceOf = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceOf}</div>
      </div>
      <div>
        <form></form>
      </div>
    </li>
  );
}