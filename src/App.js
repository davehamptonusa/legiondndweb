import React, { useEffect } from "react";
import './App.css';
import Whole from './components/Whole/Whole'
import AOS from 'aos';
import './aos.css';

function App() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
  });
  return (
    <div className="App">
      <Whole/>
    </div>
  );
}

export default App;
