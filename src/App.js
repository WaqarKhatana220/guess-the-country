import { useState, useEffect } from 'react';
import './App.css';
import countries from './countries';
import logo from './logo.png';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [revealedClues, setRevealedClues] = useState([0]);
  const [tries, setTries] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [shuffledCountries, setShuffledCountries] = useState([]);
  const [toggleInput, setToggleInput] = useState(false);

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const shuffled = shuffleArray(countries);
    setShuffledCountries(shuffled);
  }, []);

  const handleGuess = () => {
    if (userGuess === '' || userGuess.length===0) {
      return;
    }
    if (userGuess.toLowerCase() === shuffledCountries[currentCountry].name.toLowerCase()) {
      setToggleInput(!toggleInput)
      setCorrectGuesses(correctGuesses + 1);
      setStreak(streak + 1);
      setTotalGuesses(totalGuesses + 1);
      setAnswerRevealed(true);
    } else {
      if (tries < 4) {
        setRevealedClues([...revealedClues, revealedClues.length]);
        setTries(tries + 1);
      } else {
        setToggleInput(!toggleInput)
        setAnswerRevealed(true);
        setStreak(0);
        setTotalGuesses(totalGuesses + 1);
      }
    }
    setUserGuess('');
  };

  const nextCountry = () => {
    if (currentCountry < shuffledCountries.length - 1) {
      setCurrentCountry(currentCountry + 1);
      resetCountryState();
    }
  };

  const resetCountryState = () => {
    setRevealedClues([0]);
    setTries(0);
    setAnswerRevealed(false);
    setToggleInput(!toggleInput)
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGuess();
    }
  };

  return (
    <div className='container'>
      <img src={logo} alt="Logo" className="logo" />
      <div className='clues-container'>
        <div className='clues'>
          {Array(5).fill(0).map((_, index) => (
            <div
              key={index}
              className={`clue-box ${revealedClues.includes(index) ? 'revealed' : ''}`}
            >
              {revealedClues.includes(index) && shuffledCountries[currentCountry]?.clues[index]}
            </div>
          ))}
        </div>
        <div className={`answer-box ${answerRevealed ? 'revealed' : ''}`}>
          {answerRevealed ? shuffledCountries[currentCountry]?.name : '?'}
        </div>
      </div>

      <div className='score'>
        <div className='score-item'>
          <span className='label'>Accuracy:</span>
          <span className='value'>{correctGuesses}/{totalGuesses}</span>
        </div>
        <div className='score-item'>
          <span className='label'>Streak:</span>
          <span className='value'>{streak}</span>
        </div>
      </div>


      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='. . .'
        disabled={toggleInput}
      />

      <button onClick={nextCountry} disabled={!(answerRevealed && currentCountry < shuffledCountries.length - 1)}>Next</button>

      <MapContainer center={[30.3753, 69.3451]} zoom={3} className='leaflet-container' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
        />

      </MapContainer>
    </div>
  );
}

export default App;
