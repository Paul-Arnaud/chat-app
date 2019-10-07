import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Susan Fox" avatar="https://randomuser.me/api/portraits/women/48.jpg" online="True"/>
      <Contact name="Ivan Walters" avatar="https://randomuser.me/api/portraits/men/20.jpg" online="True"/>
      <Contact name="Mia Hernandez" avatar="https://randomuser.me/api/portraits/women/87.jpg" online="False"/>
    </div>
  );
}

export default App;
