import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
  
const cardValues = ["🍎", "🍇", "🥭", "🍌", "🥝", "🍉", "🥑","🍒", "🍎", "🍇", "🥭", "🍌", "🥝", "🍉", "🥑","🍒"]

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    const finalCards = cardValues.map((value, index) => {
      return {
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }
    });

    // Initialize or restart a new game
    setCards(finalCards);
    setMoves(0);
    setScore(0);
    setFlippedCards([]);
    setMatchedCards([]);
  }

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = card => {
    if (card.isFlipped || card.isMatched) return;

    // Update card flipped state
    const newCards = cards.map(c => {
      if (c.id == card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);

    // Keep track of two flipped cards
    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // Check if two cards are flipped
    if (flippedCards.length == 1) {
      const firstCard = newCards[flippedCards[0]];
      
      // check for a match
      if (firstCard.value === card.value) {
        // keep track of matched cards
        setMatchedCards(prev => [...prev, firstCard.id, card.id]);

        // Update score
        setScore(prev => prev + 1);
        
        setCards(
          newCards.map(c => {
            if (c.id === firstCard.id || c.id === card.id) return { ...c, isMatched: true };
            else return c;
          })
        );
        
        setFlippedCards([]);
      } else {
        // flip back card 1 and card 2 after 1 second delay

        setTimeout(() => {  
          setCards(
            newCards.map(c => {
              if (newFlippedCards.includes(c.id)) return { ...c, isFlipped: false };
              else return c;
            })
          );

          setFlippedCards([]);
        }, 1000);
      }

      // update moves
      setMoves(prev => prev + 1);
    }
  }

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />

      <div className="cards-grid">
        {cards.map((card, index) =>
          <Card key={index} card={card} onClick={handleCardClick} />)}
      </div>
    </div>
  )
}

export default App;