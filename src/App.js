import React from 'react';
import Weather from './components/Weather.js'
import './index.css';
import SearchBar from './components/searchBar';


const App = () => {
  return (
    <div className="background">
        <SearchBar />
      <Weather />
    </div>
  )
}

export default App;
