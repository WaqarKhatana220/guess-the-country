import { useState } from 'react';
import './App.css';
import countries from './countries';

function App() {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [revealedClues, setRevealedClues] = useState([0]);
  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    if (userGuess.toLowerCase() === countries[currentCountry].name.toLowerCase()) {
      setMessage('Correct');
    } else {
        if (tries < 4) {
          setRevealedClues([...revealedClues, revealedClues.length]);
          setTries(tries + 1);
        } else {
          setMessage(countries[currentCountry].name);
        }
    }
    setUserGuess(''); 
  };

  const nextCountry = () => {
    if (currentCountry < countries.length - 1) {
      setCurrentCountry(currentCountry + 1);
    } else {
      setCurrentCountry(0);
    }
    setRevealedClues([0]);
    setTries(0);
    setMessage('');

  }

  return (
    <div className='container'>
      {/* <h1>Guess the Country</h1> */}
      <div className='clues'>
        <ul>
          {revealedClues.map((clueIndex) => (
            <li key={clueIndex}>{countries[currentCountry].clues[clueIndex]}</li>
          ))}
        </ul>
      </div>

      <p>{message}</p>

      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>

    </div>
  );
}

export default App;
