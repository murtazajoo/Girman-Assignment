import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Landing from "./components/Landing";
import Card from './components/Card';
import SearchResultsPage from './components/SearchResultPage' 
  
  
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* <Route path='/user' element={<Card />} /> */}
        <Route path="/search/:query" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
