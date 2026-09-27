import { useState } from "react";

function TransactionForm({ onAddTransaction }) {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const[type, setType] = useState("income");
    const[category, setCategory] = useState("");
    const[date, setDate] = useState("");
    
    
            function handleSubmit() {
                const transactions = {
                    id: Date.now(),
                    name, 
                    amount,
                    type,
                    category,
                    date
                }
                onAddTransaction(transactions);
            }
            
    return (
        <div>
            <h2>Add Transaction</h2>

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
            <button onClick={handleSubmit}>Add Transaction</button>
        </div>
    );
}

export default TransactionForm;