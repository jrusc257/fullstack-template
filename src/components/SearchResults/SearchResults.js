import React from 'react';
import CountryListing from '../CountryListing/CountryListing';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import './SearchResults.scss';

const SearchResults = ({listResults, loading}) => {
    // The state of this component is determined by the app component, and the values it passes through
    // this component's inputs
    if (loading === false) {
        if (listResults !== undefined && listResults !== null) {
            return (
                // If the results passed to this component pass error checking, loop the results and
                // pass the details to a CountryListing component.  Breaking this component into a seperate
                // component keeps it nice and tidy
                listResults.map((country, key) => {
                    return (
                        <CountryListing key={country.name} countryDetails={country} />
                    )
                })
            )
        } else {
            return <h3>No Results</h3>
        }

    } else {
        // Show the loading indicator animation component if the results have been marked as loading
        return <LoadingIndicator />
    }
}

export default SearchResults