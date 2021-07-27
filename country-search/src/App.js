import './App.scss';
import React, { useState, Component } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from './components/SearchResults/SearchResults';


const App = () => {
  const [countries, setCountries] = useState([
    "Taco", "Burrito"
  ])
  const searchUpdate = (e) => {
    setCountries(countries => [...countries, "enchilada"])
    console.log(countries)
  }
  return (
    <div className="app">
      <SearchInput searchUpdate={searchUpdate}/>
      <SearchResults listResults={countries}/>
    </div>
  );
}

export default App;
