import React, {useState} from 'react';
const SearchForm = ({ onSubmitSearch, blockSearch }) => {

    const [query, setQuery] = useState('')

    const handleClick = (event) => {
        event.preventDefault();
        if(!query.trim()) {
            alert('Строка поиска пуста!');
            return;
        }
        onSubmitSearch(query);
        setQuery('');
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <form className="app-form">
            <input type="text" value={query} onChange={handleChange} className="app-input" placeholder="Укажите GitHub-аккаунт" autoFocus />
            <button className="app-form_btn" onClick={handleClick} disabled={blockSearch}>Найти</button>
        </form>
    );
};

export default SearchForm;