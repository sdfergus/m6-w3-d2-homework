import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container" style={{ padding: 20 }}>
        <h1 className="header">TV Apps</h1>
        <Link to='/netflix'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg' alt='Netflix' className="nf" />
        </Link>
        <Link to='/hbo'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' alt='HBO Max' className="hb" />
        </Link>
        <Link to='/hulu'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg' alt="Hulu" className="hu" />
        </Link>
        <Link to='/prime'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png' alt="Prime Video" className="pr" />
        </Link>
      </div>
      <Routes>
        <Route path='/:id' element={<AppName />} />
      </Routes>
    </Router>
  );
}

function AppName() {
  const { id } = useParams();
  return (
    <div className="container">
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  )
}

export default App;
