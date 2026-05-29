import Main from '../components/Main';

function TasksPage({ items, onDeleteItem }) {
  return (
    <div>
      <h2>✨ Наши украшения ✨</h2>
      <Main items={items} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default TasksPage;