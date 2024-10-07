import { useState } from 'react';
import './App.css';
import countries from './countries';
import logo from './logo.png';

function App() {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [revealedClues, setRevealedClues] = useState([0]);
  const [tries, setTries] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [answerRevealed, setAnswerRevealed] = useState(false);

  const handleGuess = () => {
    if (userGuess.toLowerCase() === countries[currentCountry].name.toLowerCase()) {
      setCorrectGuesses(correctGuesses + 1);
      setAnswerRevealed(true); // Reveal the answer when correct
    } else {
      if (tries < 4) {
        setRevealedClues([...revealedClues, revealedClues.length]);
        setTries(tries + 1);
      } else {
        setAnswerRevealed(true); // Reveal the answer when tries are over
      }
    }
    setUserGuess('');
  };

  const nextCountry = () => {
    if (currentCountry < countries.length - 1) {
      setCurrentCountry(currentCountry + 1);
      resetCountryState(); // Reset clues and answer reveal
    } else {
    }
  };

  const previousCountry = () => {
    if (currentCountry > 0) {
      setCurrentCountry(currentCountry - 1);
      resetCountryState();
    } 
  };

  const resetCountryState = () => {
    setRevealedClues([0]);
    setTries(0);
    setAnswerRevealed(false); // Reset answer reveal for the next/previous country
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGuess();
    }
  };

  return (
    <div className='container'>
      <img src={logo} alt="Logo" className="logo" /> {/* Logo added here */}
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
          {answerRevealed ? countries[currentCountry].name : '?'}
        </div>
      </div>

      <p>Correct Guesses: {correctGuesses}</p>

      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='...'
      />

        <button onClick={nextCountry} disabled={!(answerRevealed && currentCountry < countries.length - 1)}>Next</button>
      
    </div>
  );
}

export default App;
