import styles from './style.module.css';

export const CartEmpty = () => {
  return (
    <>
      <div className={styles.cart_empty}>
        <div className={styles.smile}>😊</div>
        <h2>Вы ничего не выбрали</h2>
      </div>
    </>
  );
};
