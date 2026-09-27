import TransactionCard from "./TransactionCard";
function transactionList({transactions, onDeleteTransaction}) {

    return(
        
        <div>
            <h2>Transactions</h2>

            {transactions.map((item) => (
                <TransactionCard 
                key={item.id}
                item={item} 
                onDeleteTransaction={onDeleteTransaction}/>
            ))}
        </div>
    
    );
}

export default transactionList;