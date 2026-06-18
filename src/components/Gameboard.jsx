import Card from './Card';

function GameBoard({ pokemonList, onCardClick }) {
  return (
    <div className="game-board">
      {pokemonList.map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
          onClick={() => onCardClick(pokemon.id)}
        />
      ))}
    </div>
  );
}

export default GameBoard;
