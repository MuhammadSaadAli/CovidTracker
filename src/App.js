import React from 'react';
import './App.css';

// Components
// import InfoPanel from './Components/InfoPanel';
import Nav from './Components/Nav';
// import AllCountries from './Components/AllCountries'
import Main from './Components/Main'
function App() {
  return (
    <div className="App">

      <Nav />
      <br /> <br />
      <Main />
      {/* <InfoPanel /> */}

      {/* <AllCountries /> */}
    </div>
  );
}

export default App;
