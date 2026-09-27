import{ useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {

    const [transactions, setTransactions] = useState([]); 

    function handleAddTransaction(item) {
      setTransactions([...transactions, item]);
    }
    console.log(transactions);


    function handleDeleteTransaction(id){
        setTransactions(
            transactions.filter((item) => item.id !== id)
        );
    }

    return (
        <div>
            <Header 
            title = "Expense Tracker"
            description = "Manage your income and expense" />
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <TransactionList 
            transactions={transactions}
            onDeleteTransaction={handleDeleteTransaction}
            />
        </div>
    );
}

export default App;