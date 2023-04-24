import { FC } from 'react';
import styles from './skills.module.css';
import { Icon } from 'components/icon/icon';

const SKILLS_ICONS = [
  {
    type: 'react',
    title: 'React'
  },
  {
    type: 'redux',
    title: 'Redux'
  },
  {
    type: 'ts',
    title: 'TypeScript'
  },
  {
    type: 'js',
    title: 'JavaScript'
  },
  {
    type: 'html',
    title: 'HTML'
  },
  {
    type: 'css',
    title: 'CSS'
  },
  {
    type: 'scss',
    title: 'SCSS'
  },
  {
    type: 'ws',
    title: 'WebSocket'
  },
  {
    type: 'webpack',
    title: 'Webpack'
  },
  {
    type: 'parcel',
    title: 'Parcel'
  },
  {
    type: 'handlebars',
    title: 'Handlebars'
  },
  {
    type: 'git',
    title: 'GitHub'
  },
  {
    type: 'figma',
    title: 'Figma'
  },
]

export const Skills: FC = () => {
  return (
    <div className={styles.skills}>
      {SKILLS_ICONS.map((el, index) => (
        <div className={styles.skill} key={index}>
          <Icon type={el.type} size='large'/>
          <p className={styles.title}>{el.title}</p>
        </div>
      ))}
    </div>
  );
};
