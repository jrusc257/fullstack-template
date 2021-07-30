import React from 'react';
import './CountryListing.scss';

const CountryListing = ({countryDetails}) => {
    if (countryDetails){
        console.log("country detail", countryDetails )
        return (
            <div className="country-wrapper">
                <span className="name">{countryDetails.name}</span><span className="code">({countryDetails.alpha3Code})</span>
            </div>
        )
    } else {
        return null;
    }
}

export default CountryListing;