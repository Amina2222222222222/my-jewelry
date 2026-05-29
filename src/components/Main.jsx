import Card from './Card';

function Main({ items, onDeleteItem }) {
  return (
    <main>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          onDelete={onDeleteItem}
        />
      ))}
    </main>
  );
}

export default Main;