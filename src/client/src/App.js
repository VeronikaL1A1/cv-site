import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import { NavBar, ContactBar } from './components/Bars';
import MainPage from './pages/MainPage';
import PhotoPage from './pages/PhotoPage';
import { replacementData } from './data/data';

const App = () => {
  // fetch and send data only to 2nd child to prevent refetch of aboutMeDetails when navigating menu
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('https://api.github.com/users/VeronikaL1A1').then((response) => setData(response.data)).catch((error) => {
      setData(replacementData(error));
    });
  }, []);

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

export default App;
