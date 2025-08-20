import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/ping')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>Full‑Stack App</h1>
      <p>Ping response: {data ? data.message : 'loading...'}</p>
    </div>
  );
}

export default App;
