import { useGameLogic } from "./hooks/useGameLogic";
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinMessage } from "./components/WinMessage";
  
const cardValues = ["🍎", "🍇", "🥭", "🍌", "🥝", "🍉", "🥑","🍒", "🍎", "🍇", "🥭", "🍌", "🥝", "🍉", "🥑","🍒"]

const App = () => {
  const { cards, score, moves, handleCardClick, initializeGame, isGameCompleted } = useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />

      {isGameCompleted && <WinMessage moves={moves} />}

      <div className="cards-grid">
        {cards.map((card, index) =>
          <Card key={index} card={card} onClick={handleCardClick} />)}
      </div>
    </div>
  )
}

export default App;