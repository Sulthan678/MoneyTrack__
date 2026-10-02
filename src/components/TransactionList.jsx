import TransactionCard from "./TransactionCard";
function TransactionList({transactions, onDeleteTransaction, onEditTransaction}) {

    return(
        
        <div>
            <h2>Transactions</h2>

            {transactions.map((item) => (
                <TransactionCard 
                key={item.id}
                item={item} 
                onDeleteTransaction={onDeleteTransaction}
                onEditTransaction={onEditTransaction}/>

            ))}
        </div>
    
    );
}

export default TransactionList;