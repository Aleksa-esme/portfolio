import { FC } from 'react';
import { Link } from "react-scroll";
import styles from './header.module.css';

const MENU = [
  {
    title: 'Портфолио',
    link: 'portfolio'
  },
  {
    title: 'Обо мне',
    link: 'about'
  },
  {
    title: 'Контакты',
    link: 'contacts'
  }
]

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          {
            MENU.map((el, i) => (
              <li className={styles.item} key={i}>
                <Link
                  activeClass="active"
                  to={el.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                >
                  {el.title}
                </Link>
              </li>
            ))
          }
          <li className={styles.item}>
            <a href="https://cloud.mail.ru/public/7gBg/PM1r2bPdE" target='blank'>Резюме</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
