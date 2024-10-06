import { useState } from 'react';
import './App.css';
import countries from './countries';
import Modal from './Modal'; // Import the Modal component
import logo from './logo.png';

function App() {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [revealedClues, setRevealedClues] = useState([0]);
  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState('');
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  const handleGuess = () => {
    // if (userGuess.length === 0) {
    //   return;
    // }
    if (userGuess.toLowerCase() === countries[currentCountry].name.toLowerCase()) {
      setMessage('Correct');
      setAnswerRevealed(true); // Reveal the answer when correct
      setModalVisible(true); // Show the modal
    } else {
      if (tries < 4) {
        setRevealedClues([...revealedClues, revealedClues.length]);
        setTries(tries + 1);
      } else {
        setMessage(countries[currentCountry].name);
        setAnswerRevealed(true); // Reveal the answer when tries are over
        setModalVisible(true); // Show the modal
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
    setModalVisible(false); // Hide the modal
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
          {answerRevealed && countries[currentCountry].name}
        </div>
      </div>

      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='...'
      />

      <div className='countryToggle'>
      <button onClick={nextCountry}>Previous</button>
      <button onClick={nextCountry}>Next</button>
      </div>

     
      
    </div>
  );
}

export default App;
