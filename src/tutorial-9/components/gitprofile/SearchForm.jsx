import React, {useState} from 'react';

const SearchForm = ({ getUser, blockSearch }) => {

    const [query, setQuery] = useState('')

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        if(! query.trim()) {
            alert('Строка поиска пуста!');
            return;
        }
        getUser(query);
        setQuery('');
    }


    return (
        <form className="app-form">
            <input type="text" value={query} onChange={handleChange} className="app-input" placeholder="Укажите GitHub-аккаунт" autoFocus  />
            <button className="app-form_btn" onClick={handleClick} disabled={blockSearch}>Найти</button>
        </form>
    );
};

export default SearchForm;