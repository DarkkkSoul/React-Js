import React, { useMemo } from 'react'

function ExpensiveCounter() {

    function calculateExpense() {
        let i = 0;
        for (i; i < 1000000000; i++) {
            i = i + 1;
        }
        return i;
    }
    const expenseTracker = useMemo(() => calculateExpense(), []);

    return (
        <div>
            <div>Expense: {expenseTracker}</div>
        </div>
    )
}

export default ExpensiveCounter 