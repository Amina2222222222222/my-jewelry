import { useState } from 'react';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Название нового украшения..."
      />
      <button type="submit">➕ Добавить украшение</button>
    </form>
  );
}

export default TaskForm;