import { FC } from "react";
import { ProductCard } from "../../components";
import styles from "./style.module.css";
import data from "../../assets/data.json";
interface IObj {
  id: number;
  name: string;
  desc: string;
  img: string;
  price: number;
  category: string;
}
interface IProps {
  title: string;
  htmlId: string;
}

export const ProductList: FC<IProps> = ({ title, htmlId }) => {
  const items: IObj[] = data.filter((it) => it.category === htmlId);
  return (
    <section className={styles.product_list} id={htmlId}>
      <h2 className={styles.sub_title}>{title}</h2>
      <div className={styles.product_list_item}>
        {items.map((it) => (
          <ProductCard key={it.id} {...it} />
        ))}
      </div>
    </section>
  );
};
