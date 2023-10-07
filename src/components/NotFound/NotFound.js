import './NotFound.css';
import { Link, useNavigate } from "react-router-dom";

export function NotFound() {

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не&nbsp;найдена</p>
      <Link to="" onClick={handleBack} className="not-found__link">Назад</Link>
    </section>
  )
}