import { FC, useEffect } from "react";
import { CartCard, CartEmpty, CartInfo } from "../../components";
import { X } from "lucide-react";
import styles from "./style.module.css";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useCartStore } from "../../store/slices/cart";

interface IProps {
  isOpen?: boolean;
  setIsOpen?: any;
}
export const CartBlock: FC<IProps> = ({ isOpen, setIsOpen }) => {
  const cartQty = useCartStore((state) => state.quantity);
  const items = useCartStore((state) => state.items);
  const check = useCartStore((state) => state.checkAllQty);

  console.log("items", items, cartQty);
  useEffect(() => {
    check();
  }, [items]);

  //закрывает блок корзины при нажатии вне элемента
  const ref = useOutsideClick(() => {
    setIsOpen(false);
    console.log("closed");
  });
  return (
    <div className={`${styles.cart} ${isOpen && styles.active}`}>
      <div className={styles.overlay}></div>
      <div className={styles.cart_block} ref={ref}>
        <button
          onClick={() => setIsOpen(false)}
          style={{ backgroundColor: "transparent" }}
        >
          <X size="32" color="rgb(255 189 69)" />
        </button>
        {cartQty > 0 ? (
          <div className={styles.content}>
            <h2 className={styles.cart_title}>Список товаров:</h2>
            <div className={styles.cart_product_list}>
              {items.map((it) => (
                <CartCard key={it.id} {...it} />
              ))}
            </div>
            <CartInfo />
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};
