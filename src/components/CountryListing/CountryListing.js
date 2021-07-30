import React from 'react';
import './CountryListing.scss';

const CountryListing = ({countryDetails}) => {
    if (countryDetails){
        // Renders a set of details about an individual country, nothing fancy
        return (
            <div className="country-wrapper">
                <div>
                    <div className="name"><strong>{countryDetails.name}</strong><span className="code">({countryDetails.alpha2Code} / {countryDetails.alpha3Code})</span></div>
                    <div>
                        <span className="region-name"><strong>Region: </strong>{countryDetails.region}</span>&nbsp;
                        <span className="region-name"><strong>Sub-region: </strong> {countryDetails.subregion}</span></div>
                    <div><strong>Pop: </strong>{countryDetails.population.toLocaleString()}</div>
                    <div><strong>Languages:</strong></div>
                    <ul className="language-list">
                        {countryDetails.languages.map((language) => {
                            return (
                                <li key={language.name}>{language.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <img className="flag" alt={"FLag of " + countryDetails.name} src={countryDetails.flag} />
            </div>
        )
    } else {
        return null;
    }
}

export default CountryListing;