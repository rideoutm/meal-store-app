import { useContext, useState } from "react";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import CartContext from "../../context/CartContext";
import Checkout from "./Checkout";

export default function Cart({ onClose }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={onClose} />}
      {!isCheckout && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={onClose}>
            Close
          </button>
          {hasItems && (
            <button onClick={() => setIsCheckout(true)} className={styles.button}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}
