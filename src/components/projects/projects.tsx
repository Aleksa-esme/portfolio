import { FC } from 'react';
import { Icon } from 'components/icon/icon';
import chatImage from 'assets/webchat.png';
import projectImage from 'assets/project.png';
import engImage from 'assets/eng.png';
import comImage from 'assets/com.png';
import catImage from 'assets/cat.png';
import styles from './projects.module.css';

const PROJECTS_INFO = [
  {
    title: 'Веб чат',
    image: chatImage,
    description: 'Веб-чат для общения с другими пользователями в реальном времени',
    more: 'https://github.com/Aleksa-esme/WebChat/blob/main/README.md',
    tech: ['TypeScript', 'WebSocket', 'Handlebars', 'Webpack', 'Parcel', 'Jest', 'HTML', 'SCSS'],
    git: 'https://github.com/Aleksa-esme/WebChat',
    link: 'https://web-chat-3acm.onrender.com'
  },
  {
    title: 'Поиск книг',
    image: projectImage,
    description: 'Поиск книг с использованием Google Books API',
    more: 'https://github.com/Aleksa-esme/books-searcher/blob/master/README.md',
    tech: ['React', 'Redux', 'JavaScript', 'HTML', 'SCSS'],
    git: 'https://github.com/Aleksa-esme/books-searcher',
    link: 'https://aleksa-esme.github.io/books-searcher'
  },
  {
    title: 'Курсы ин. языков',
    image: engImage,
    description: 'Лэндинг для организатора обучающих выездных программ',
    tech: ['JavaScript', 'HTML', 'SCSS'],
    git: 'https://github.com/Aleksa-esme/englishpluse.space',
    link: 'http://englishplus.space'
  },
  {
    title: 'Котики',
    image: catImage,
    description: 'Просмотр котиков с использованием API thecatapi.com',
    more: 'https://github.com/Aleksa-esme/Cats_VueJS/blob/master/README.md',
    tech: ['Vue','JavaScript', 'HTML', 'SCSS'],
    git: 'https://github.com/Aleksa-esme/Cats_VueJS',
    link: 'https://aleksa-esme.github.io/Cats_VueJS/#/all'
  },
  {
    title: 'Фасилитация',
    image: comImage,
    description: 'Лэндинг для эксперта по фасилитации и межкультурной коммуникации',
    tech: ['HTML', 'CSS'],
    git: 'https://github.com/Aleksa-esme/postysheva.ru',
    link: 'https://aleksa-esme.github.io/postysheva.ru'
  }
]

export const Projects: FC = () => {
  return (
    <div className={styles.projects}>
      {
        PROJECTS_INFO.map((project, index) => (
          <div className={styles.project} key={index}>
            <div>
              <p className={styles.title}>{project.title}</p>
              <img className={styles.image} src={project.image} alt={project.title} />
              <p className={styles.description}>{project.description}</p>
              {project.more && <a className={styles.more} href={project.more} target="blank">Подробнее</a>}
            </div>
            <div className={styles.footer}>
              <ul className={styles.tech}>
                {project.tech.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
              <div className={styles.icons}>
                <a className={styles.link} href={project.git} target="blank">
                <Icon type='git' size='small'/>
                  <span>GitHub</span>
                  </a>
                <a className={styles.link} href={project.link} target="blank">
                  <Icon type='web' size='medium'/>
                  <span>Сайт</span>
                </a>
              </div>
            </div>
        </div>
        ))
      }
    </div>
  );
};
