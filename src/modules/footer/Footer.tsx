import { FC } from "react";
import styles from "./style.module.css";
import { Github } from "lucide-react";
export const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://github.com/lazar15x"
          target="_blank"
        >
          Ссылка на гитхаб автора
          <Github />
        </a>
        <div>Данный сайт является пет проектом</div>
      </div>
    </footer>
  );
};
