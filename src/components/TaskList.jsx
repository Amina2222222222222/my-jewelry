import { useEffect, useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Эмуляция загрузки с API
    setTimeout(() => {
      const mockTasks = [
        { id: 1, title: 'Создать дизайн кольца', completed: true },
        { id: 2, title: 'Закупить камни для серёг', completed: false },
        { id: 3, title: 'Упаковать заказ клиента', completed: true },
        { id: 4, title: 'Перезвонить клиенту', completed: false },
        { id: 5, title: 'Обновить каталог на сайте', completed: false }
      ];
      setTasks(mockTasks);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <p>⏳ Загрузка задач...</p>;
  }

  return (
    <div className="task-list-api">
      <h3>📋 Наши текущие задачи:</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.title}</span>
            <span className="status">
              {task.completed ? '✅ Выполнено' : '⏳ В процессе'}
            </span>
          </li>
        ))}
      </ul>
      <p className="api-note">* Данные загружены из API (эмуляция)</p>
    </div>
  );
}

export default TaskList;