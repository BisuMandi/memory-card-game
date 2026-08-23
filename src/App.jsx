import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
  
const cardValues = ["🍎", "🍇", "🥭", "🍌", "🥝", "🍉", "🥑","🍒", "🍎", "🍇", "🥭", "🍌", "🥝", "🍉", "🥑","🍒"]

const App = () => {

  return (
    <div className="app">
      <GameHeader score={2} moves={3} />

      <div className="cards-grid">
        {cardValues.map((card, index) =>
          <Card card={card} />)}
      </div>
    </div>
  )
}

export default App;