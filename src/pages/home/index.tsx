import { FC } from "react";
import { OftenOrders, ProductList } from "@/modules";
import { navLinks } from "@/modules/header/const";

export const Home: FC = () => {
  return (
    <>
      <OftenOrders />
      <div className="container">
        {navLinks.map((it) => (
          <ProductList key={it.id} htmlId={it.eng} title={it.name} />
        ))}
      </div>
    </>
  );
};
