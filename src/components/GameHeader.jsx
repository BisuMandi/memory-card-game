export const GameHeader = ({ score, moves }) => {
  
    return (
        <div className="game-header">
            {/* Game name */}
            <h1>🎮 Memory Card Game</h1>
            
            {/* Game stats */}
            <div className="stats">
                {/* Score */}
                <div className="stat-item">
                    <span className="stat-label">Score:</span>
                    <span className="stat-value">{score}</span>
                </div>
                {/* Moves */}
                <div className="stat-item">
                    <span className="stat-label">Moves:</span>
                    <span className="stat-value">{moves}</span>
                </div>
                <div className="stat-item"></div>
            </div>
        </div>
    )
}