import { FC } from 'react';
import { Link } from "react-scroll";
import styles from './downButton.module.css';

export const DownButton: FC = () => {
  return (
    <Link
      activeClass="active"
      to='portfolio'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={styles.down}
    >
      <div>
        <span></span>
        <span></span>
      </div>
    </Link>
  );
};
