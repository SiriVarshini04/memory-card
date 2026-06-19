import { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/Gameboard';

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const CONFETTI_COLORS = ['#E3350D', '#FFCB05', '#3B4CCA', '#7CFC00'];

function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDuration = `${1 + Math.random()}s`;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 2000);
  }
}

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      const randomIds = [];
      while (randomIds.length < 12) {
        const randomId = Math.floor(Math.random() * 150) + 1;
        if (!randomIds.includes(randomId)) {
          randomIds.push(randomId);
        }
      }

      const requests = randomIds.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
      );

      const results = await Promise.all(requests);

      const formatted = results.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        imageUrl: pokemon.sprites.front_default,
      }));

      setPokemonList(shuffle(formatted));
      setLoading(false);
    }

    fetchPokemon();
  }, []);

  function handleCardClick(id) {
    if (clickedIds.includes(id)) {
      setScore(0);
      setClickedIds([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedIds([...clickedIds, id]);
      if (newScore > bestScore) {
        setBestScore(newScore);
        launchConfetti();
      }
    }
    setPokemonList((prevList) => shuffle(prevList));
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Pokemon Memory Card</h1>
      <p className="subtitle">Click a card you haven't clicked yet. Don't repeat!</p>

      <div className="score-board">
        <div className="score-panel">
          <div className="label">Score</div>
          <div className="value">{score}</div>
        </div>
        <div className="score-panel">
          <div className="label">Best</div>
          <div className="value">{bestScore}</div>
        </div>
      </div>

      <GameBoard pokemonList={pokemonList} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
