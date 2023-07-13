import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/projectname')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className="content">
        <h1 className="title">{message}</h1>
        <p className="description">A modern solution to priority parking</p>
      </div>
    </div>
  );
}

export default App;
