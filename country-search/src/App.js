import './App.scss';
import React, { Component } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from './components/SearchResults/SearchResults';


class App extends React.Component {
  render() {
    const searchUpdate = (e) => {
      console.log('parent component', e)
    }
    return (
      <div className="app">
        <SearchInput searchUpdate={searchUpdate}/>
        <SearchResults />
      </div>
    );
  }
}

export default App;
