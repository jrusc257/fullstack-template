import React from 'react';
import CountryListing from '../CountryListing/CountryListing';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import './SearchResults.scss';

const SearchResults = ({listResults, loading}) => {
    return (
        <div className="search-results-component">
            <h2>Results</h2>
            { loading === false
            ? 
                listResults !== undefined && listResults.length > 0
                ? 
                    listResults.map((country, key) => {
                        return <CountryListing key={country.name} countryDetails={country} />
                    })
                : <div>No Results</div>
            : <LoadingIndicator />
            }
        </div>
    )
}


export default SearchResults