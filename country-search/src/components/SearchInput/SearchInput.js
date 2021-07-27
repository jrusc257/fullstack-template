import React from 'react';
import './SearchInput.scss';

class SearchInput extends React.Component {
    render() {
        return (
            <div>
                <h1>Search by country code or name</h1>
                <input type="text"></input>
            </div>
        )
    }
}

export default SearchInput