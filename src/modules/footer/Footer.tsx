import { Github } from 'lucide-react';
import styles from './style.module.css';

export const Footer = () => {
  return (
    <footer>
      <div>
        <a
          className={styles.link}
          href="https://github.com/lazar15x"
          target="_blank">
          Ссылка на гитхаб автора
          <Github />
        </a>
        <div>Данный сайт является пет проектом</div>
      </div>
    </footer>
  );
};
