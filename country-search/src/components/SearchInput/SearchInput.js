import React, { useState } from 'react';
import './SearchInput.scss';
import magnifyIcon from '../../assets/icons/magnifying-glass.svg';
import cancelIcon from '../../assets/icons/cancel.svg';

const SearchInput = ({searchCallback}) => {
    let searchDebounce;
    const [showClearInput, setShowClearInput] = useState(false)


    // TODO: this is still sending duplicate requests in some cases
    const searchUpdate = (e) => {
        if(e.target.value !== '' && e.target.value !== undefined) {
            setShowClearInput(true);
        } else {
            setShowClearInput(false);
        }
        if(searchDebounce !== undefined){
            clearTimeout(searchDebounce);
        }
        searchDebounce = setTimeout(()=> {
            if(e.target.value !== '' && e.target.value !== undefined) {
                searchCallback(e.target.value);
            }
        }, 2000)
    }

    const clearSearch = (e) => {
        setShowClearInput(false);      
        if(searchDebounce !== undefined){
            clearTimeout(searchDebounce);
        }
        searchCallback(undefined);
    }

    return (
        <div className="search-input-component">
            <h1>Search by country code or name</h1>
            <form onReset={clearSearch}>
                <input type="text" onInput={searchUpdate}></input>
                { showClearInput === true
                    ? <span><input id="ResetButton" type="reset" /><label htmlFor="ResetButton"><img alt="clear input" className="search-input-icon" src={cancelIcon} /></label></span>
                    : <img alt="search" className="search-input-icon" src={magnifyIcon}/>}
            </form>
        </div>
    )
}

export default SearchInput