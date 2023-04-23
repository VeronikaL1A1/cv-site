import React, { useState, useEffect } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';

import MainPage from "./pages/MainPage";
import PhotoPage from "./pages/PhotoPage";

const App=() =>{
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.users));
    // Specify how to clean up after this effect:
    return () => {};
  }, []); // empty 2nd arg - only runs once

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/photographies" element={<PhotoPage/>}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        
        <p>
          Edit <code>client/server/routes/api.js</code> and save to reload
          Node.js app.
        </p>
      </header>
    </div>
  );
}

export default App;
