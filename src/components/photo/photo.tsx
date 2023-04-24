import { FC } from 'react';
import styles from './photo.module.css';

export const Photo: FC = () => {
  return (
    <div className={styles.image}>
      <div className={styles.background}></div>
      <img className={styles.photo} src={require('../../assets/photo.jpg')} alt="author" />
    </div>
  );
};
