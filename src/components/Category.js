import {useState} from 'react';

function Category({categoryAdded}) {
    const emptyCategory = '';
    const [categoryName, setCategoryName] = useState(emptyCategory);

    function handleSubmit(event) {
        event.preventDefault();
        categoryAdded(categoryName);
        setCategoryName(emptyCategory);
    }

    function handleChange(event) {
        setCategoryName(event.target.value);
    }

    return (
        <div>
            <h3>New Expense Category</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type={'text'} name='categoryName' value={categoryName} onChange={handleChange} required/>
                </label>
                <button type='submit'>Add Category</button>
            </form>
        </div>
    ) 
}

export default Category;