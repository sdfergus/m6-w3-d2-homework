import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import "./App.css";

const mediaList = {
  'netflix': {
    name: 'Netflix',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg',
    alt: 'Netflix Logo'
  },
  'hbo': {
    name: 'HBO Max',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg',
    alt: 'HBO Max Logo'
  },
  'hulu': {
    name: 'Hulu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg',
    alt: 'Hulu Logo'
  },
  'prime': {
    name: 'Prime Video',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
    alt: 'Prime Video Logo'
  }
}

function App() {
  //Insert router, links here
  return (
    <Router>
      {/* <nav style={{ margin: 10 }}>
        <Link to='/' style={{ padding: 5 }}>
        </Link>
        <Link to='/movies' style={{ padding: 5 }}>
        </Link>
      </nav> */}
      <Routes>
        <Route path='/' element={<TVApps />} >
          <Route path='/' element={<AppList />} />
          <Route path=':id' element={<AppName />} />
        </Route>
      </Routes>
    </Router>
  );
}

function TVApps() {
  return (
    <div style={{ padding: 20 }}>
      <h2>TV APPS</h2>
      {/* render any matching child */}
      <Outlet />
    </div>
  );
}

function AppList() {
  return (
    <ul>
      {Object.entries( mediaList ).map( ( [ id, { image, alt } ] ) => (
        <li key={id}>
          <Link to={`/${ id }`}>
            <img src={image} alt={alt} />
          </Link>
        </li>
      ) )}
    </ul>
  );
}

function AppName() {
  const { id } = useParams();
  const tvApp = mediaList[ id ];
  const { name } = tvApp;
  return (
    <div>
      <h3>You Selected:<span>{name}</span></h3>
    </div>
  )
}

export default App;