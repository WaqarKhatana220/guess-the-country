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
          setMessage('Wrong! Try again.');
        } else {
          setMessage(`Sorry! The correct answer was ${countries[currentCountry].name}.`);
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
    <div>
      <h1>Guess the Country</h1>
      <div>
        <ul>
          {revealedClues.map((clueIndex) => (
            <li key={clueIndex}>{countries[currentCountry].clues[clueIndex]}</li>
          ))}
        </ul>
      </div>

      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>

      <p>{message}</p>
    </div>
  );
}

export default App;
