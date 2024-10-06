import { useState } from 'react';
import './App.css';
import countries from './countries';

function App() {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [revealedClues, setRevealedClues] = useState([0]);
  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState('');
  const [answerRevealed, setAnswerRevealed] = useState(false);

  const handleGuess = () => {
    if (userGuess.toLowerCase() === countries[currentCountry].name.toLowerCase()) {
      setMessage('Correct');
      setAnswerRevealed(true); // Reveal the answer when correct
    } else {
      if (tries < 4) {
        setRevealedClues([...revealedClues, revealedClues.length]);
        setTries(tries + 1);
      } else {
        setMessage(countries[currentCountry].name);
        setAnswerRevealed(true); // Reveal the answer when tries are over
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
    setAnswerRevealed(false); // Reset answer reveal for the next country
  };

  return (
    <div className='container'>
      <div className='clues-container'>
        <div className='clues'>
          {Array(5).fill(0).map((_, index) => (
            <div
              key={index}
              className={`clue-box ${revealedClues.includes(index) ? 'revealed' : ''}`}
            >
              {revealedClues.includes(index) && countries[currentCountry].clues[index]}
            </div>
          ))}
        </div>
        <div className={`answer-box ${answerRevealed ? 'revealed' : ''}`}>
          {answerRevealed && countries[currentCountry].name}
        </div>
      </div>

      <p>{message}</p>

      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <button onClick={nextCountry}>Next Country</button>
    </div>
  );
}

export default App;
