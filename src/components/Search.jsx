

import { useState } from "react";

const Search = (props) => {

    const {searchMovies = Function.prototype} = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if(event.key === 'Enter') {
            searchMovies(search, type)
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    }

    return (
        <div className="row">
            <div className="input-field">
                <input placeholder='search' 
                id="email_inline" 
                type="search" 
                className="validate"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
                />
                <button className='btn search-btn' onClick={() => searchMovies(search, type)}>Search</button>
            </div>
            <label>
                <input className="with-gap" name="type" type="radio" data-type='all' onChange={handleFilter} checked={type === 'all'}/>
                <span>All</span>
            </label>
            <label>
                <input className="with-gap" name="type" type="radio" data-type='movie' onChange={handleFilter} checked={type === 'movie'}/>
                <span>Movies Only</span>
            </label>
            <label>
                <input className="with-gap" name="type" type="radio" data-type='series' onChange={handleFilter} checked={type === 'series'}/>
                <span>Series Only</span>
            </label>
            </div>
    )
}

export default Search;