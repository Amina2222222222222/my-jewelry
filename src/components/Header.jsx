import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>✨ Ювелирный Мир ✨</h1>
      <p>Украшения для особых моментов</p>
      <nav className="nav-menu">
        <Link to="/">🏠 Каталог</Link>
        <Link to="/about">📖 О нас</Link>
      </nav>
    </header>
  );
}

export default Header;