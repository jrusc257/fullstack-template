import './App.scss';
import React, { useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from './components/SearchResults/SearchResults';
import SiteHead from './components/SiteHead/SiteHead';
import ErrorBanner from './components/ErrorBanner/ErrorBanner';
import axios from 'axios';

// Be gentle, this is my first React app ;)

// App component contains the logic that handles the state of the app.
// Most notibly it handles the API call to get results, handles any API error states
// and passes results and loading state to a results component

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCountries = (searchVal) => {
    // This function is called when a new request is issued.
    // First set loading state to true
    setLoading(loading => true);
    if ( searchVal !== undefined ){

      // Configure our request header with the search string value
      const headConfig = {params: {
        "searchString": searchVal
      }};

      // I found axios as a nice simple library to handle the http request
      axios.get(`http://localhost:8765/api`, headConfig)
        .then(res => {
          // On a successful response, set country data for the results component then
          // set loading to false again.
          const resp = res.data;
          setCountries(countries => resp.data);
          setError(error => false);
          setLoading(loading => false);
        })
        .catch(err => {
          // If the api responds with an error state, log it and render the error state
          console.log(err);
          setError(error => true);
        });
    } else {
      // Assuming the search value is undefined, we can assume the field was cleared
      // and the loading can be turned off (nothing will be loaded in this state)
      setLoading(loading => false);
    }
  }

  return (
    <div className="app">
      <SiteHead />
      <div className="site-content-wrapper">
        <SearchInput searchCallback={getCountries}/>
        { error ? <ErrorBanner /> : null }
        <h2>Results</h2>
        <SearchResults listResults={countries} loading={loading}/>
      </div>
    </div>
  );
}

export default App;
