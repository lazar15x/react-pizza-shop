import { FC } from "react";
import styles from "./style.module.css";

export const CartEmpty: FC = () => {
  return (
    <>
      <div className={styles.cart_empty}>
        <div style={{ fontSize: "120px" }}>😊</div>
        <h2>Вы ничего не выбрали, закажите что нибудь</h2>
      </div>
    </>
  );
};
