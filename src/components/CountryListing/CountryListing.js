import React from 'react';
import './CountryListing.scss';

const CountryListing = ({countryDetails}) => {
    if (countryDetails){
        return (
            <div className="country-wrapper">
                <div>
                    <div className="name">{countryDetails.name}<span className="code">({countryDetails.alpha3Code})</span></div>
                    <div className="capital">{countryDetails.capital}</div>
                </div>
                <img className="flag" alt={"FLag of " + countryDetails.name} src={countryDetails.flag} />
            </div>
        )
    } else {
        return null;
    }
}

export default CountryListing;