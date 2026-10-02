import{ useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {

    const [transactions, setTransactions] = useState([]); 
    const [editingTransaction, setEditingTransaction] = useState(null);
    console.log(editingTransaction);

    function handleAddTransaction(item) {
      setTransactions([...transactions, item]);
    }
    console.log(transactions);



    // handle delete transaction
    function handleDeleteTransaction(id){
        setTransactions(
            transactions.filter((item) => item.id !== id)
        );
    }



    // handle edit transaction
    function handleEditTransaction(id) {
        const itemtransaction = transactions.find((item) => item.id === id);

        setEditingTransaction(itemtransaction);
    }


    
    //handle update transaction
    function handleUpdateTransaction(itemtransaction) {
    setTransactions(
        transactions.map((item) =>
            item.id === itemtransaction.id
                ? itemtransaction
                : item
        )
    );

    setEditingTransaction(null);
    }

    return (
        <div>
            <Header 
            title = "Expense Tracker"
            description = "Manage your income and expense" />
            
            <TransactionForm 
            onAddTransaction={handleAddTransaction}
            editingTransaction={editingTransaction}
            onUpdateTransaction={handleUpdateTransaction} />

            <TransactionList 
            transactions={transactions}
            onDeleteTransaction={handleDeleteTransaction}
            onEditTransaction={handleEditTransaction}
            />
        </div>
    );
}

export default App;