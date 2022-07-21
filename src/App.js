import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Stats } from './Pages/Stats/Stats';

function App() {
  return (
    <div className="App">
      <span className="Text">Статистика по тренажерам</span>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/stats" element={<Stats/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
