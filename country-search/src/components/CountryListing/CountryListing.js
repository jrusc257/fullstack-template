import React from 'react';
import './CountryListing.scss';

const CountryListing = ({countryDetails}) => {
    return (
        <div className="country-wrapper">
            {countryDetails.name}
            {/* <div className="country-name">{countryDetails.name}</div> */}
        </div>
    )
}

export default CountryListing;