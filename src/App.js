// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

// The REAL function that should be in GitHub
// src/App.js

// TEMPORARY FUNCTION FOR LOCAL TESTING
const fetchQuote = async () => {
  console.log("Using dummy data because of local network issue.");
  setQuote("The journey of a thousand miles begins with a single step.");
  setAuthor("Lao Tzu");
};

  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <div className="quote-box">
        {quote ? (
          <>
            <p className="quote-text">"{quote}"</p>
            <p className="quote-author">- {author}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default App;