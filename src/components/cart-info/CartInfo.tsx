import { FC } from "react";
import styles from "./style.module.css";
import { useBoundStore } from "../../store";

export const CartInfo: FC = () => {
  const cartQty = useBoundStore((state) => state.quantity);
  const removeAll = useBoundStore((state) => state.removeAll);
  const items: [] = useBoundStore((state) => state.items);

  //подсчет полной суммы
  const fullSum = items.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className={styles.cart_info}>
      <div>
        <span className={styles.title}>Сумма заказа: </span>
        <span className={styles.value}>{fullSum}₽</span>
      </div>
      <div>
        <span className={styles.title}>Количество товаров: </span>
        <span className={styles.value}>{cartQty}</span>
      </div>
      <div className={styles.bottom_btn}>
        <button className={styles.btn_buy}>Заказать</button>
        <button onClick={removeAll} className={styles.btn_outline}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
};
