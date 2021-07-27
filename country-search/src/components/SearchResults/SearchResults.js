import React from 'react';
import './SearchResults.scss';

const SearchResults = ({listResults}) => {
    return (
        <div className="search-results-component">
            <h2>Results</h2>
            <ul>
                {listResults !== undefined && listResults.length > 0
                ? listResults.map((country, key) => {
                    return <div key={country.name}>{country.name}</div>
                })
                : <div>No Results</div>
                }
            </ul>
        </div>
    )
}


export default SearchResults