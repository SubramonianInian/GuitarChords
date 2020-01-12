import React from 'react';
import './App.css';
import PageContainer from './Components/pageContainer';
import NavBar from './Components/navBar'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <PageContainer/>
    </div>
  );
}

export default App;
