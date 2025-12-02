import './App.css';
import { useState } from "react";



function App() {
  const [word, setWord] = useState("");
  const [foundWord, setFoundWord] = useState(null);
  const [error, setError] = useState("");


  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  function searchWord() {
    const result = dictionary.find(
      (item) => item.word.toLowerCase() === word.toLowerCase()
    );

    if (result) {
      setFoundWord(result.meaning);
      setError("");
    } else {
      setFoundWord(null);
      setError("Word not found in the dictionary.");
    }
  }
  
  return (
    <div className="container">
      <h2>Dictionary APP</h2>

      <input
        type="text"
        className="input-box"
        placeholder="Enter a word"
        onChange={(e) => setWord(e.target.value)}
      />

      <button className="search-btn" onClick={searchWord}>Search</button>

      {foundWord && (
        <>
          <h3>Definition:</h3>
          <p>{foundWord}</p>
        </>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}


export default App;
