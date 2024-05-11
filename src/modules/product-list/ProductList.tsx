import { FC } from "react";
import { ProductCard } from "@/components";
import styles from "./style.module.css";
import data from "@/assets/data.json";
import { IProduct } from "@/shared/types/items.type";

interface IProps {
  title: string;
  htmlId: string;
}

export const ProductList: FC<IProps> = ({ title, htmlId }) => {
  const items: IProduct[] = data.filter((it) => it.category === htmlId);
  return (
    <section className={styles.product_list} id={htmlId}>
      <h2 className={styles.sub_title}>{title}</h2>
      <div className={styles.product_list_item}>
        {items.map((it) =>
          items.length > 0 ? (
            <ProductCard key={it.id} {...it} />
          ) : (
            <h2>LOADING</h2>
          )
        )}
      </div>
    </section>
  );
};
