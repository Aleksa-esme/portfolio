import { Header, Photo, Skills, Projects, Footer, DownButton } from './components';
import styles from './app.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.greeting}>
          <div className={styles.me}>
            <Photo />
            <p className={styles.text}>Привет! Я <span className={styles.name}>Александра Зайцева</span> - фронтенд&nbsp;разработчик. Люблю учиться и разбираться в новых технологиях.</p>
          </div>
          <div className={styles.skills}>
            <p className={styles.title}>Навыки</p>
            <Skills />
          </div>
          <DownButton />
        </section>
        <section className={styles.portfolio} id='portfolio'>
          <p className={styles.title}>Портфолио</p>
          <Projects />
        </section>
        <section className={styles.about} id='about'>
          <p className={styles.title}>Обо мне</p>
          <div>
            <p className={styles.about_text}>Есть опыт коммерческой разработки:</p>
            <ul>
              <li className={styles.about_list}>Больше 5 лет работала по профессии  - инженером-разработчиком оборудования и программного обеспечения</li>
              <li className={styles.about_list}>В 2019 г. начала изучать веб разработку, а в 2021 решила окончательно перейти в эту сферу и уделять больше своего времени для ее изучения</li>
            </ul>
            <p className={styles.about_text}>Учеба – это моё хобби, поэтому веб-разработка мне отлично подходит – это направление, которое не стоит на месте и требует постоянного изучения большого количества информации.</p>
            <p className={styles.about_text}>
              Я начала свое изучение WEB с бэкэнда (
                <a href='https://gb.ru/certificates/728656.en' target='blank' className={styles.about_link}>Python</a>, 
                <a href='https://gb.ru/certificates/783010.en' target='blank' className={styles.about_link}>MySQL</a>,
                <a href='https://gb.ru/certificates/725809.en' target='blank' className={styles.about_link}>Linux</a>,
                <a href='https://gb.ru/certificates/1263157.en' target='blank' className={styles.about_link}>Django</a>
              ), но основным направлением выбрала для себя фронтенд (
                <a href='https://gb.ru/certificates/1757498.en' target='blank' className={styles.about_link}>React</a>, 
                <a href='https://github.com/Aleksa-esme/certificates/blob/master/1.%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%A8%D0%A0%D0%98_2022.png' target='blank' className={styles.about_link}>TypeScript</a>, 
                <a href='https://gb.ru/certificates/1798696.en' target='blank' className={styles.about_link}>JavaScript</a>, 
                <a href='https://gb.ru/certificates/883205.en' target='blank' className={styles.about_link}>HTML/CSS</a>
              ) – именно работа с интерфейсами привлекает меня больше всего.
            </p>
            <p className={styles.about_text}>
              Летом/осенью 2022г. прошла программу от Яндекс Академии с отбором ~ 36 человек на место : <a href="https://github.com/Aleksa-esme/certificates/blob/master/1.%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%A8%D0%A0%D0%98_2022.png" target='blank' className={styles.about_link}>командная разработка проекта</a> для Яндекса в рамках 3х недельного хакатона + лекции и задания. 
              <a href='https://www.youtube.com/watch?v=wDbOmHFh0_k&list=LL&index=13&ab_channel=%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B0' target='blank' className={styles.about_link}>YouTube</a>
            </p>
            <p className={styles.about_text}>Сейчас продолжаю совершенствовать свои навыки на курсе от Яндекс Практикума «Мидл фронтенд разработчик».</p>
            <p className={styles.about_text}>Владею английским на уровне разговорного и письменного. Есть образование технического переводчика.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
