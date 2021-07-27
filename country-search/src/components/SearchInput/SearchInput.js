import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.scss';

class SearchInput extends React.Component {

    render() {
        let searchDebounce;
        const searchUpdate = (e) => {
            if(searchDebounce){
                clearTimeout(searchDebounce);
            }
            searchDebounce = setTimeout(()=> {
                this.props.searchUpdate(e);
            }, 800)
        }
        return (
            <div className="search-input-component">
                <h1>Search by country code or name</h1>
                <input type="text" onInput={searchUpdate}></input>
            </div>
        )
        SearchInput.propTypes = {
            searchUpdate: PropTypes.func.isRequired
        }
    }
}

export default SearchInput