import { useEffect } from "react";

export const useScrollIntoView = () => {
  useEffect(() => {
    const anchors: NodeListOf<HTMLAnchorElement> | null =
      document.querySelectorAll('a[href^="#"]');
    const t: any[] = [];
    anchors.forEach((anchor) => {
      const elem = anchor.addEventListener("click", (event) => {
        event.preventDefault();
        /*@ts-ignore*/
        const target = anchor.getAttribute("href").substring(1);
        console.log("anchor", target);
        smoothScroll(target);
      });
      t.push(elem);
    });
    console.log(t);

    return () => {
      t.forEach((value) => {
        removeEventListener("click", value);
      });
    };
  });

  const smoothScroll = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return { smoothScroll };
};
