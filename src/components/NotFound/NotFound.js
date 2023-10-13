import './NotFound.css';
import { Link,} from "react-router-dom";

export function NotFound() {

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не&nbsp;найдена</p>
      <Link to={-1} className="not-found__link">Назад</Link>
    </section>
  )
}