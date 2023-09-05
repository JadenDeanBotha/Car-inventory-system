import './App.css';
import {  Routes, Route } from "react-router-dom";


import { Navbar } from './components/Navbar';
import Home from './components/Home';
import DisplayOlder from "./components/DisplayOlder";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/DisplayOlder" element={<DisplayOlder />}></Route>
      </Routes>
      
    </div>
    
  );
}

export default App;
