import './Footer.css'

export function Footer() {
    return (
        <section className="footer">
            <h2 className="footer__head">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h2>
            <nav className="footer__nav">
                <p className="footer__copyright">&copy; 2023</p>
                <ul className="footer__links">

                    <li className="footer__links-item">
                        <a href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__links-item">
                        <a href="https://github.com/AnnaOmelyanchuk/" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                    </li>

                </ul>
            </nav>
        </section>
    )
}