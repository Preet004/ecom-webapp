
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search?query=${query}`);
    };

    return (
        <form onSubmit={submitHandler} className="search-box">
            <input
                type="text"
                name="query"
                id="query"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBox;
