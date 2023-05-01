import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import { NavBar, ContactBar } from './components/Bars';
import MainPage from './pages/MainPage';
import PhotoPage from './pages/PhotoPage';
import { replacementData } from './data/data';

const App = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get('https://api.github.com/users/VeronikaL1A1').then((response) => setData(response.data)).catch((error) => {
      setData(replacementData(error));
    });
  }, []);

  console.log(data);
  return (
    <div className="App">

      <main>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<MainPage data={data} />} />
          <Route path="/photographies" element={<PhotoPage data={data} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <footer><ContactBar /></footer>
      </main>

    </div>
  );
};
// const [users, setUsers] = useState([]);

// useEffect(() => {
//   fetch('/api/users')
//     .then((res) => res.json())
//     .then((json) => setUsers(json.users));
//   // Specify how to clean up after this effect:
//   return () => {};
// }, []); // empty 2nd arg - only runs once

export default App;
