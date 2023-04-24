import { FC } from 'react';
import { Icon } from 'components/icon/icon';
import { animateScroll as scroll } from "react-scroll";
import styles from './footer.module.css';

export const Footer: FC = () => {

  const scrollToTop = () => {
    scroll.scrollToTop(); 
};
  return (
    <footer className={styles.footer} id='contacts'>
      <button className={styles.button} onClick={scrollToTop}>
        <Icon type='arrow' size='small'/>
      </button>
      <div>
        <a className={styles.mail} href="mailto:aleksa1712@bk.ru">aleksa1712@bk.ru</a>
        <div className={styles.icons}>
          <a href="https://github.com/Aleksa-esme" className={styles.icon}>
            <Icon type='git' size='medium'/>
          </a>
          <a className={styles.icon} href="https://api.whatsapp.com/send/?phone=7-916-907-84-53&text=Александра,%20здравствуйте!">
            <Icon type='whatsapp' size='medium'/>
          </a>
          <a className={styles.icon} href="https://t.me/Aleksa_esme">
            <Icon type='telegram' size='medium'/>
          </a>
        </div>
      </div>
      <hr className={styles.line} />
      <p className={styles.location}>Москва</p>
    </footer>
  );
};
