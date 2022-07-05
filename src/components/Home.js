import ExpenseCard from './ExpenseCard';

function Home({expenses}) {
    const expenseListUi = expenses.map( expense => <li key={expense.id}><ExpenseCard key={expense.id} expense={expense}/></li>)
    return (
        <div>
            <p>This is how much was spent so far:</p>
            <ul>{expenseListUi}</ul>
        </div>
    )
}

export default Home;