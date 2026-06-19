# Pokémon Memory Card Game

A memory card game built with React and PokéAPI — click each Pokémon only once per round without repeating. Features live score tracking, a best score counter, and confetti when you beat your high score.

## How to Play

- Click any Pokémon card to start
- Each card can only be clicked **once per round**
- Cards shuffle after every click to test your memory
- Click a card you've already clicked and your score resets
- Try to click all 12 cards without repeating to get a perfect score!

## Features

- 12 random Pokémon fetched from PokéAPI on every page load
- Live score and best score tracker
- Cards shuffle after every click
- Confetti burst when you beat your best score
- Pokédex-themed UI with animations
- Responsive layout (4 columns on desktop, 2 on mobile)

## Built With

- React (useState, useEffect)
- Vite
- PokéAPI
- CSS Grid

## Live Demo

https://memory-game-odin1.netlify.app/

## Getting Started

```bash
git clone https://github.com/SiriVarshini04/memory-card.git
cd memory-card
npm install
npm run dev
```

## Acknowledgements

- [PokéAPI](https://pokeapi.co/) for the Pokémon data
- [The Odin Project](https://www.theodinproject.com/) for the project brief
