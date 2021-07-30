import './App.scss';
import React, { useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from './components/SearchResults/SearchResults';
import SiteHead from './components/SiteHead/SiteHead';
import ErrorBanner from './components/ErrorBanner/ErrorBanner';
import axios from 'axios';

// Be gentle, this is my first React app ;)

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchUpdate = (value) => {
    setCountries(countries => []);
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
        })
        .catch(err => {
          console.log(err);
          setError(error => true);
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
        { error ? <ErrorBanner /> : null }
        <h2>Results</h2>
        <SearchResults listResults={countries} loading={loading}/>
      </div>
    </div>
  );
}

export default App;
