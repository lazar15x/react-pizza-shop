import oftenOrders from '@/assets/oftenOrders.json';
import styles from './style.module.css';

export const OftenOrders = () => {
  return (
    <section>
      <div className="container">
        <h2>Часто заказывают:</h2>
        <div className={styles.often_orders}>
          {oftenOrders.map(it => (
            <article className={styles.row} key={it.id}>
              <img width="80px" src={it.img} alt={it.name} />
              <div className={styles.info}>
                <h2 className={styles.title}>{it.name}</h2>
                <span>{it.price} ₽</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
