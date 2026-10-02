function TransactionCard({item, onDeleteTransaction, onEditTransaction}) {
  return (
    <div>

      <h3>{item.name}</h3>
      <p>Amount:{item.amount}</p>
      <p>Type:{item.type}</p>
      <p>Category:{item.category}</p>
      <p>Date:{item.date}</p>

      <button onClick={() => onEditTransaction(item.id)}>
          Edit
      </button>

      <button onClick={() => onDeleteTransaction(item.id)}>
          Delete
      </button>
    </div>
  );
}

export default TransactionCard;
