import React from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

export default function Cart({ onClose }) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "id", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={styles.button}>order</button>
      </div>
    </Modal>
  );
}
