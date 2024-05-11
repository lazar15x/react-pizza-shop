import { FC } from "react";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/store/slices/cart";
import { IProduct } from "@/shared/types/items.type";
import styles from "./style.module.css";

export const CartCard: FC<IProduct> = ({ id, name, img, price }) => {
  const removeFromCart = useCartStore((state) => state.remove);

  return (
    <>
      <div className={styles.cart_card}>
        <img className={styles.img} src={img} alt="" />
        <button onClick={() => removeFromCart(id)} className={styles.remove}>
          <Trash2 />
        </button>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.price}>
          <span>Цена: </span>
          <span>{price}₽</span>
        </div>
      </div>
    </>
  );
};
