import { FC } from "react";
import styles from "./style.module.css";
import { useCartStore } from "../../store/slices/cart";

export const CartInfo: FC = () => {
  const cartQty = useCartStore((state) => state.quantity);
  const removeAll = useCartStore((state) => state.removeAll);
  const items = useCartStore((state) => state.items);

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
