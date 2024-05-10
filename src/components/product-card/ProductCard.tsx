import { FC } from "react";
import styles from "./style.module.css";
import { useBoundStore } from "../../store";
interface IProps {
  id?: number;
  name: string;
  desc: string;
  img: string;
  price: number;
}
export const ProductCard: FC<IProps> = ({ id, name, desc, img, price }) => {
  const addToCard = useBoundStore((state) => state.add);
  const item = {
    id,
    name,
    desc,
    img,
    price,
  };

  return (
    <article className={styles.card}>
      <div className={styles.card_img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.card_name}>{name}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.bottom}>
        <div className={styles.price}>{price} ₽</div>
        <button onClick={() => addToCard(item)} className={styles.buy}>
          Выбрать
        </button>
      </div>
    </article>
  );
};
