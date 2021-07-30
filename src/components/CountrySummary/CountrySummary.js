import React from 'react';
import './CountrySummary.scss';

const CountrySummary = ({countryList}) => {
    if (countryList){
        let regions = [];
        let subRegions = [];
        let filteredRegions = [];
        let filteredSubRegions = [];

        for (const i in countryList) {
            regions.push(countryList[i].region)
            subRegions.push(countryList[i].subregion)
        }

        function filterAndCount(list, target){
            for (const i in list) {
                if (target === undefined || !target.find(target => target.name === list[i])) {
                    target.push({'name': list[i], 'count': 1 })
                } else {
                    target[target.findIndex(target => target.name === list[i])].count +=1;
                }
            }
        }

        filterAndCount(regions, filteredRegions);
        filterAndCount(subRegions, filteredSubRegions);

        return (
            <div className="country-summary-wrapper">
                <h2>Summary</h2>
                <p>How many times did each region and sub-region appear in this search?</p>
                <h3>Regions</h3>
                <div className="tag-wrapper">
                    {filteredRegions.map((region, key) => {
                        return (
                            <span className="region-tag" key={region.name}>{region.name} x {region.count}</span>
                        )
                    })}
                </div>
                <h3>Sub-regions</h3>
                <div className="tag-wrapper">
                    {filteredSubRegions.map((region, key) => {
                        return (
                            <span className="region-tag" key={region.name}>{region.name} x {region.count}</span>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default CountrySummary;