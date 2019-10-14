import React from 'react';
// import './App.css';
import Contact from './components/Contact';
// import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <Contact name="Theresa Morales"  avatar="https://randomuser.me/api/portraits/women/4.jpg" online={true}/>
      <Contact name="Justin Ferguson"  avatar="https://randomuser.me/api/portraits/men/23.jpg" online={false}/>
      <Contact name="Earl Cole"  avatar="https://randomuser.me/api/portraits/men/55.jpg" online={false}/>
      <Contact name="Jo Gilbert"  avatar="https://randomuser.me/api/portraits/women/88.jpg" online={true}/>
      <Contact name="Arlene Wade"  avatar="https://randomuser.me/api/portraits/women/64.jpg" online={true}/>
    </div> 
  );
}

export default App;
