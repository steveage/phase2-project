function ExpenseCard({expense}) {
    function formatAmount(amount) {
        const amountFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
        return amountFormatter.format(amount);
    }

    return (
        <div>
            <h2>{formatAmount(expense.amount)}</h2>
            <h4>{expense.category}</h4>
            <p>{expense.date}</p>
            <p style={{'fontStyle': 'italic'}}>{expense.note}</p>
        </div>
    )
}

export default ExpenseCard;