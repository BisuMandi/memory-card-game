import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
  
const cardValues = ["🍎", "🍇", "🥭", "🍌", "🥝", "🍉", "🥑","🍒", "🍎", "🍇", "🥭", "🍌", "🥝", "🍉", "🥑","🍒"]

const App = () => {
  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    const finalCards = cardValues.map((value, index) => {
      return {
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }
    });

    setCards(finalCards);
    console.log(finalCards);
    
  }

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = card => {
    if (card.isFlipped || card.isMatched) return;

    const newCards = cards.map(c => {
      if (c.id == card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);
  }

  return (
    <div className="app">
      <GameHeader score={2} moves={3} />

      <div className="cards-grid">
        {cards.map((card, index) =>
          <Card key={index} card={card} onClick={handleCardClick} />)}
      </div>
    </div>
  )
}

export default App;