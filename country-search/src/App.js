import './App.scss';
import React, { useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from './components/SearchResults/SearchResults';
import SiteHead from './components/SiteHead/SiteHead';
import axios from 'axios';


const App = () => {
  const [countries, setCountries] = useState(undefined)

  const searchUpdate = (value) => {
    setCountries(countries => undefined)
    getCountries(value);
  }

  const logResponse = (result) => {
    console.log(result);
  }

  const getCountries = (searchVal) => {
    if ( searchVal !== undefined ){
      const headConfig = {params: {
        "searchString": searchVal
      }};

      axios.get(`http://localhost:8765/api`, headConfig)
        .then(res => {
          const resp = res.data;
          logResponse({ resp });
          setCountries(countries => resp.data)
        });
    }
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
