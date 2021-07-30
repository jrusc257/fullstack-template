import React, { useState } from 'react';
import './SearchInput.scss';
import magnifyIcon from '../../assets/icons/magnifying-glass.svg';
import cancelIcon from '../../assets/icons/cancel.svg';

const SearchInput = ({searchCallback}) => {
    // set a variable to debounce a timeout
    let searchDebounce;

    // set a flag for whether to show the "x" button that clears the input
    // The button won't show if there's nothing to clear
    const [showClearInput, setShowClearInput] = useState(false)

    const searchUpdate = (e) => {
        // handle the state for showing the "clear input" button
        if(e.target.value !== '' && e.target.value !== undefined) {
            setShowClearInput(true);
        } else {
            setShowClearInput(false);
        }
        // If there's already a setTimeout assigned to this variable (signifying an in-flight
        // timout, then clear it so we can do a new one.
        if(searchDebounce !== undefined){
            clearTimeout(searchDebounce);
        }
        // The input will only trigger the callback function if the user has stopped
        // typing for 800 milleseconds.  This it easy to see results as you type them
        // without absolutely obliterating the api with requests
        searchDebounce = setTimeout(()=> {
            if(e.target.value !== '' && e.target.value !== undefined) {
                searchCallback(e.target.value);
            }
        }, 800)
    }

    // function to allow users to clear the input
    const clearSearch = (e) => {
        setShowClearInput(false);
        // The following line will catch the rare instance when a user clicks the "x"
        // before a timeout has completed
        if(searchDebounce !== undefined){
            clearTimeout(searchDebounce);
        }
        // update the input with an undefined value
        searchCallback(undefined);
    }

    return (
        <div className="search-input-component">
            <h1>Search by country code or name</h1>
            <form onReset={clearSearch}>
                <div className="input-wrap">
                    <input type="text" onInput={searchUpdate}></input>
                    { showClearInput === true
                        ? <span className="search-clear-icon"><input id="ResetButton" type="reset" /><label htmlFor="ResetButton"><img alt="clear input" src={cancelIcon} /></label></span>
                        : <img alt="search" className="search-input-icon" src={magnifyIcon}/>}
                </div>
            </form>
        </div>
    )
}

export default SearchInput