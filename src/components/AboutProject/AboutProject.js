import './AboutProject.css';

export function AboutProject() {
    return (
        <section id="about-project-id" className="about-project">
            <h2 className="about-project__head-text">О&nbsp;проекте</h2>
            <div className="about-project__info">
                <div className="about-project__info-card">
                    <h3 className="about-project__info-head">Дипломный проект включал 5&nbsp;этапов</h3>
                    <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
                </div>
                <div className="about-project__info-card">
                    <h3 className="about-project__info-head">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
                    <p className="about-project__info-text">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__bar">
                <p className="about-project__bar-text about-project__text_one-week">1&nbsp;неделя</p>
                <p className="about-project__bar-text about-project__text_four-week">4&nbsp;недели</p>
                <p className="about-project__caption-text about-project__caption-text-back">Back-end</p>
                <p className="about-project__caption-text about-project__caption-text-front">Front-end</p>
            </div>
        </section>
    )
}