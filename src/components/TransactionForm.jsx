import { useState, useEffect } from "react";

function TransactionForm({ onAddTransaction, editingTransaction, onUpdateTransaction }) {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const[type, setType] = useState("income");
    const[category, setCategory] = useState("");
    const[date, setDate] = useState("");
    
    
    useEffect(() => {
    if (editingTransaction) {
        setName(editingTransaction.name);
        setAmount(editingTransaction.amount);
        setType(editingTransaction.type);
        setCategory(editingTransaction.category);
        setDate(editingTransaction.date);    }
    }, [editingTransaction]);

    
            function handleSubmit(e) {
                e.preventDefault();
                const transaction = {
                    id: editingTransaction
                        ? editingTransaction.id
                        : Date.now(),

                    name,
                    amount,
                    type,
                    category,
                    date
                };
            //console.log(editingTransaction);

            if (editingTransaction) {
                onUpdateTransaction(transaction);
                resetForm();
            } else {
                onAddTransaction(transaction);
                resetForm();
            }
    }


    function resetForm() {
    setName("");
    setAmount("");
    setType("");
    setCategory("");
    setDate("");    
        }

    return (
        <div>
            <h2>Add Transaction</h2>
             <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Transaction name"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />
            <input
                type="number"
                placeholder="Transaction amount"
                value = {amount}
                onChange = {(e) => setAmount(e.target.value)}
            />


            <select value={type} onChange={(event) => setType(event.target.value)} >
                <option vlaue="income">Income</option>
                <option vlaue="expense">Expense</option>
                </select>

            <input
                type="text"
                placeholder="Transaction category"
                value = {category}
                onChange = {(e) => setCategory(e.target.value)}
                />
            <input
                type="date"
                value = {date}
                onChange = {(e) => setDate(e.target.value)}
                />

            <p>currrent name: {name} </p>

            <button type="submit">
            {editingTransaction ? "Update Transaction" : "Add Transaction"}
            </button>
                
                
            </form>
        </div>
    );
}   

export default TransactionForm;