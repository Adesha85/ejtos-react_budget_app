import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const inputValue = event.target.value;

        // Calculate total expenses
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

        // Check if the new budget is greater than or equal to total spending
        if (inputValue >= totalExpenses) {
            setNewBudget(inputValue);
        } else {
            alert("Budget cannot be lower than total spending.");
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Location}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;

