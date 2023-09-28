import './NavTab.css';

export function NavTab() {
    return (
            <nav className="promo__nav">
                <ul className="promo__links">

                    <li className="promo__links-item">
                        <a href="#about-project-id"  target="_self"  rel="noreferrer" className="promo__link">О проекте</a>
                    </li>
                    <li className="promo__links-item">
                        <a href="#techs-id"  target="_self" rel="noreferrer" className="promo__link">Технологии</a>
                    </li>
                    <li className="promo__links-item">
                        <a href="#about-me-id"  target="_self" rel="noreferrer" className="promo__link">Студент</a>
                    </li>

                </ul>
            </nav>

    )
}

