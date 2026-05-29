function Card({ id, title, description, price, onDelete }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="price">{price}</div>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        🗑️ Удалить
      </button>
    </div>
  );
}

export default Card;