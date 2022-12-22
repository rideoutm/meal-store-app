import styles from "./Checkout.module.css";

const Checkout = ({ onCancel }) => {
  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Street</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="City">City</label>
        <input type="text" id="City" />
      </div>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};
export default Checkout;
