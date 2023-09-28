import './Portfolio.css';
export function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__head">Портфолио</h4>

            <ul className="portfolio__links">

                <li className="portfolio__link-item">
                    <a href="https://github.com/AnnaOmelyanchuk/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer" >Статичный сайт</a>
                </li>
                <li className="portfolio__link-item">
                    <a href="https://github.com/AnnaOmelyanchuk/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer" >Адаптивный сайт</a>
                </li>
                <li className="portfolio__link-item">
                    <a href="https://github.com/AnnaOmelyanchuk/express-mesto-gha-new" className="portfolio__link" target="_blank" rel="noreferrer" >Одностраничное приложение</a>
                </li>

            </ul>
        </section>
    )
}