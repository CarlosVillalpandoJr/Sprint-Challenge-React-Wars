import React, { useState, useEffect } from 'react';
import StarWarsList from './components/StarWarsList';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => setCharacterData(res.data.results))
      .catch(error => (console.log('The data was not returned!', error)))
  }, [])
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsList characterArray={characterData} />
    </div>
  );
}

export default App;
