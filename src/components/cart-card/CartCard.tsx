import { FC } from "react";
import { Trash2 } from "lucide-react";
import styles from "./style.module.css";
import { useCartStore } from "../../store/slices/cart";

interface IProps {
  id: number;
  name: string;
  desc: string;
  img: string;
  price: number;
}

export const CartCard: FC<IProps> = ({ id, name, img, price }) => {
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
          Цена:
          <span>{price}₽</span>
        </div>
      </div>
    </>
  );
};
