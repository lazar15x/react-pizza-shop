import { FC, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { CartBlock } from "..";
import { createPortal } from "react-dom";
import { navLinks } from "./const";
import { useScrollIntoView } from "../../hooks/useScrollIntoView";
import logo from "/public/static/logo.png";

export const Header: FC = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  console.log("LOG", document.getElementById("portals"));
  useScrollIntoView();

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <div className={styles.top_nav}>
              <Link to="/">
                <img
                  alt="Pizza time logo"
                  className={styles.logo}
                  src={logo}
                  width="70"
                  height="70"
                />
                <div className={styles.logo_title}>Pizza Time</div>
              </Link>
              <div className={styles.cart}>
                <button
                  onClick={() => setIsOpenCart(true)}
                  className={styles.cart_btn}
                >
                  <ShoppingCart />
                </button>
              </div>
            </div>
            <ul className={styles.nav_list}>
              {navLinks.map((link) => (
                <li key={link.id} className={styles.nav_list_item}>
                  <a className={styles.row} href={`#${link.eng}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {createPortal(
        <CartBlock isOpen={isOpenCart} setIsOpen={setIsOpenCart} />,
        /*@ts-ignore*/
        document.getElementById("portals")
      )}
    </>
  );
};
