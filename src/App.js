import React, { Component } from 'react';
import './App.css';
import Graph from './router/graph';
import Trades from './router/trades';
import Team from './router/team';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="navigation">
        <nav >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/team/">Team</Link>
            </li>
            <li>
              <Link to="/trades/">Trades</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Graph} />
        <Route path="/team/" component={Team} />
        <Route path="/trades/" component={Trades} />
      </div>
    </Router>
  );
}

export default App;


