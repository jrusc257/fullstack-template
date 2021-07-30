import React from 'react';
import CountryListing from '../CountryListing/CountryListing';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import './SearchResults.scss';

const SearchResults = ({listResults, loading}) => {

    if (loading === false) {
        if (listResults !== undefined) {
            console.log("Result Details", listResults.countryByName);
            let results = [];
            if (listResults.countryByName) {
                results += listResults.countryByName;
            }
            if (listResults.countryByCode) {
                results += listResults.countryByCode;
            }
            return <CountryListing countryDetails={results} />;
        } else {
            return <h4>No Results</h4>
        }

    } else {
        return <LoadingIndicator />
    }


    // return (
    //     <div className="search-results-component">
    //         { loading === false
    //         ? 
    //             listResults !== undefined && listResults.length > 0
    //             ?
    //             listResults.countryByName !== undefined && listResults.countryByName.length > 0
    //                 ? 
    //                     <listCountryByName countryList={listResults.CountryByName} />
    //                 : <div>No Results</div>
    //             :<div>No Results</div>
    //         : <LoadingIndicator />
    //         }
    //     </div>
    // )
}


export default SearchResults