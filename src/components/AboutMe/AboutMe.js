import './AboutMe.css';
import photo from '../../images/student.svg'

export function AboutMe() {
    return (
        <section id="about-me-id" className="about-me">
            <h2 className="about-me__head">Студент</h2>

            <div className="about-me__description">

                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Виталий</h3>
                    <p className="about-me__description-subtitle">Фронтенд-разработчик, 30 год</p>
                    <p className="about-me__description-paragraph">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ.
                        У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
                        С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
                        После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
                    </p>
                    <div className="about-me__description-links">
                        <a href="https://github.com/" className="about-me__description-link" target="_blank" rel="noreferrer">Github</a>
                    </div>

                </div>
                <img src={photo} alt="Виталик" className="about-me__description-photo" />
            </div>
        </section>
    )
}