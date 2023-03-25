import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Header/Navbar';
import MatchDetails from './Components/matchDetails/MatchDetails';
import PlayerDetails from './Components/PlayerDetails/PlayerDetails';
import NewsDetail from './Components/News/NewsDetail';
import Matches from './Components/Matches/Matches';
import Schedule from './Components/Schedule/Schedule';
import About from './Components/About/About';
import Error from './Components/Error/Error';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/match/:matchId" element={<MatchDetails />} ></Route>
          <Route exact path="/player/:playerId" element={<PlayerDetails />} ></Route>
          <Route exact path="/news/:newsId" element={<NewsDetail />} ></Route>
          <Route exact path="/matches" element={<Matches />} ></Route>
          <Route exact path="/schedule" element={<Schedule />} ></Route>
          <Route exact path="/about" element={<About />} ></Route>
          <Route exact path="/error" element={<Error />} ></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
