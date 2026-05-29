import TaskList from '../components/TaskList';

function AboutPage() {
  return (
    <div>
      <div className="about-page">
        <h2>📖 О нашем магазине</h2>
        <p>Мы создаём украшения ручной работы из драгоценных металлов и камней.</p>
        <p>Каждое изделие уникально и создаётся с любовью к деталям.</p>
        <p>📍 Адрес: Москва, ул. Ювелирная, 5</p>
        <p>📞 Телефон: +7 (999) 123-45-67</p>
        <p>✉️ Email: info@jewelry-shop.ru</p>
      </div>

      {/* Блок с загрузкой задач */}
      <TaskList />
    </div>
  );
}

export default AboutPage;