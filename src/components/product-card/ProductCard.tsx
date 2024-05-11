import { FC } from "react";
import { useCartStore } from "@/store/slices/cart";
import { IProduct } from "@/shared/types/items.type";
import styles from "./style.module.css";

export const ProductCard: FC<IProduct> = ({
  id,
  name,
  desc,
  img,
  price,
  category,
}) => {
  const addToCard = useCartStore((state) => state.add);
  const items = useCartStore((state) => state.items);
  const index = items.findIndex((it) => it.id === id);
  const item = {
    id,
    name,
    desc,
    img,
    price,
    category,
  };

  function handleAdd() {
    addToCard(item);
  }

  return (
    <article className={styles.card}>
      <div className={styles.card_img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.card_name}>{name}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.bottom}>
        <div className={styles.price}>{price} ₽</div>
        <button onClick={() => handleAdd()} className={styles.buy}>
          {index === -1 ? "Выбрать" : "Добавлено"}
        </button>
      </div>
    </article>
  );
};
