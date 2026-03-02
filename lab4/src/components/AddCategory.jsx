import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setInputValue('');
        onNewCategory(inputValue.trim());
    }
    
    return (
        <form className="add-category-form" onSubmit={onSubmit}>
            <input 
                type="text" 
                className="search-input"
                placeholder="Buscar GIFs... 🔍" 
                value={inputValue}
                onChange={onInputChange} 
            />
        </form>
    )
}