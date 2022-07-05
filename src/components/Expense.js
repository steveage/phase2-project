import { useState } from "react";

function Expense({expenseAdded, categories}) {
    const formObject = {
        amount: 0,
        category: 'food',
        date: '',
        note: ''
    };
    const [formData, setFormData] = useState(formObject);

    function handleSubmit(event) {
        event.preventDefault();
        formData.date = new Date(Date.now()).toString();
        expenseAdded(formData);
        setFormData(formObject);
    }

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    function categoryOptionsUi() { 
        return categories.map(category => <option value={category.name}>{category.name}</option>)
    };

    return (
        <section>
            <h3>New Expense:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount:
                    <input type={'number'} name='amount' value={formData.amount} onChange={handleChange}/>
                </label>
                <label>
                    Category:
                    <select name='category' value={formData.category} onChange={handleChange}>
                    {categoryOptionsUi()}
                    </select>
                </label>
                <label>
                    Note:
                    <input type={'text'} name='note' value={formData.note} onChange={handleChange}/>
                </label>
                <button type={'submit'}>Add Expense</button>
            </form>
        </section>
    )
}

export default Expense;