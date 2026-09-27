function TransactionCard({item, onDeleteTransaction}) {
  return (
    <div>

      <h3>{item.name}</h3>
      <p>Amount:{item.amount}</p>
      <p>Type:{item.type}</p>
      <p>Category:{item.category}</p>
      <p>Date:{item.date}</p>

      <button onClick={() => onDeleteTransaction(item.id)}>
          Delete
      </button>
    </div>
  );
}

export default TransactionCard;
