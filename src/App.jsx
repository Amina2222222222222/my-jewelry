import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TasksPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [items, setItems] = useState([
    { id: 1, title: '💎 Кольцо с бриллиантом', description: 'Изысканное кольцо из белого золота', price: '89 999 ₽' },
    { id: 2, title: '✨ Серьги с сапфирами', description: 'Элегантные серьги с сапфирами', price: '124 500 ₽' },
    { id: 3, title: '👑 Подвеска с жемчугом', description: 'Нежная подвеска с натуральным жемчугом', price: '45 800 ₽' }
  ]);

  function addItem(title) {
    const newItem = {
      id: Date.now(),
      title: title,
      description: 'Новое уникальное украшение',
      price: 'Цена по запросу'
    };
    setItems([...items, newItem]);
  }

  function deleteItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <TaskForm addTask={addItem} />
      
      <Routes>
        <Route path="/" element={<TasksPage items={items} onDeleteItem={deleteItem} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;