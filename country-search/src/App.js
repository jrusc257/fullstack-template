import './App.scss';
import React, { useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from './components/SearchResults/SearchResults';
import SiteHead from './components/SiteHead/SiteHead';
import axios from 'axios';

// Be gentle, this is my first React app ;)

const App = () => {
  const [countries, setCountries] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const searchUpdate = (value) => {
    setCountries(countries => undefined)
    getCountries(value);
  }

  const getCountries = (searchVal) => {
    setLoading(loading => true);
    if ( searchVal !== undefined ){
      const headConfig = {params: {
        "searchString": searchVal
      }};

      axios.get(`http://localhost:8765/api`, headConfig)
        .then(res => {
          const resp = res.data;
          setCountries(countries => resp.data);
          setLoading(loading => false);
        });
    } else {
      setLoading(loading => false);
    }
  }

  return (
    <div className="app">
      <SiteHead />
      <div className="site-content-wrapper">
        <SearchInput searchCallback={searchUpdate}/>
        <SearchResults listResults={countries} loading={loading}/>
      </div>
    </div>
  );
}

export default App;
