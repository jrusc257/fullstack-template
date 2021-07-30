import React from 'react';
import CountryListing from '../CountryListing/CountryListing';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import './SearchResults.scss';

const SearchResults = ({listResults, loading}) => {
    if (loading === false) {
        if (listResults !== undefined && listResults !== null) {
            console.log("Result Details", listResults);
            return (
                listResults.map((country, key) => {
                    return (
                        <CountryListing key={country.name} countryDetails={country} />
                    )
                })
            )
        } else {
            return <h4>No Results</h4>
        }

    } else {
        return <LoadingIndicator />
    }
}

export default SearchResults