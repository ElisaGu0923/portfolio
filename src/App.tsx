import React from 'react';
import './App.css';
import PersonalInfo from './components/personal_info/personal_info';
import MainPanel from './components/main_panel/main_panel';

function App() {
  return (
    <div className="App">
      <PersonalInfo></PersonalInfo>
      <MainPanel></MainPanel>
    </div>
  );
}

export default App;
