import './App.scss';
import React, { Component } from 'react';
import SearchInput from './components/SearchInput/SearchInput';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SearchInput />
      </div>
    );
  }
}

export default App;
