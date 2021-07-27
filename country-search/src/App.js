import './App.scss';
import React, { useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from './components/SearchResults/SearchResults';
import SiteHead from './components/SiteHead/SiteHead';
import axios from 'axios';


const App = () => {
  const [countries, setCountries] = useState([
    {name: "Taco"},
    {name: "Burrito"}
  ])

  const searchUpdate = (value) => {
    setCountries(countries => undefined)
    getCountries(value);
  }

  const getCountries = function(str) {
    //console.log("getting countries", str);
    // Placeholder for PHP service call
  }

  return (
    <div className="app">
      <SiteHead />
      <div className="site-content-wrapper">
        <SearchInput searchCallback={searchUpdate}/>
        <SearchResults listResults={countries}/>
      </div>
    </div>
  );
}

export default App;
