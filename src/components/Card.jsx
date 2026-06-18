import { useState } from 'react';

function Card({ name, imageUrl, onClick }) {
  const [isPopping, setIsPopping] = useState(false);

  function handleClick() {
    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 250);
    onClick();
  }

  return (
    <div className={`card ${isPopping ? 'pop' : ''}`} onClick={handleClick}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
