# 🃏 React Fruit Memory Game

**React Fruit Memory Game** is a responsive, client-side web application built with **React, Vite, and modern ES6+ JavaScript**. The game challenges players to match 8 pairs of fruit cards on a dynamic 4×4 board while demonstrating robust React state patterns and clean component architecture.

The project focuses on separating **business logic from UI presentation** through a dedicated custom hook (`useGameLogic`). It features dynamic board generation using the **Fisher-Yates shuffle algorithm**, turn-based matching mechanics, move and score tracking, and interaction locking with asynchronous timers to prevent rapid-click state race conditions.


## 🔗 Live Demo

🌐 [Try Fruit Memory Game](https://bisumandi.github.io/memory-card-game/)

## 🚀 Tech Stack

* **Frontend**: React, JavaScript (ES6+)
* **Build Tool**: Vite
* **Styling**: CSS3
* **State Management**: React `useState` and `useEffect`
* **Logic**: Custom React Hook (`useGameLogic`)

## 🎯 Features

* 4×4 memory card grid with 16 cards.
* Contains 8 different fruit emoji pairs.
* Cards are shuffled randomly using the **Fisher-Yates Shuffle Algorithm**.
* Tracks the number of moves made by the player.
* Displays the number of matched pairs in real time.
* Prevents multiple card clicks while cards are being compared.
* Cards automatically flip back when two selected cards do not match.
* Displays a winning message when all pairs are matched.
* Shows game performance statistics after completing the game.
* Reset button to start a new game with a freshly shuffled board.
* Responsive design for different screen sizes.

## 📋 How to Play

* Open the [Live Demo](https://bisumandi.github.io/memory-card-game/).
* Click on any card to reveal the fruit.
* Click on another card to find its matching pair.
* If the two cards match, they remain revealed.
* If they don't match, they flip back after a short delay.
* Continue matching cards until all 8 pairs are found.
* Try to complete the game in as few moves as possible.

## 🧠 How It Works

1. **Game Initialization**:

   * The game creates 8 pairs of fruit cards.
   * The cards are shuffled using the Fisher-Yates algorithm.
   * The shuffled cards are displayed in a 4×4 grid.

2. **Card Selection**:

   * When a card is clicked, it is revealed.
   * The game stores the selected card.
   * Once two cards are selected, their values are compared.

3. **Matching Logic**:

   * If the cards match, they are marked as matched and remain visible.
   * If they don't match, the cards are flipped back after a short delay.

4. **Interaction Locking**:

   * The game temporarily prevents additional clicks while two cards are being compared.
   * This prevents users from selecting more than two cards at the same time.

5. **Win Condition**:

   * The game keeps track of matched pairs.
   * When all 8 pairs are matched, a winning overlay is displayed with the player's performance statistics.

6. **Reset**:

   * The reset button starts a new game.
   * A new shuffled board is generated and all game statistics are reset.

## 📦 Folder Structure

```text
memory-card-game/
├── public/
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── GameHeader.jsx
│   │   └── WinMessage.jsx
│   │
│   ├── hooks/
│   │   └── useGameLogic.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 📈 Future Improvements

* Add difficulty levels such as 4×4, 6×6, and 8×8.
* Add a timer to track how quickly the player completes the game.
* Add a best-score system using `localStorage`.
* Add sound effects for card flips and matches.
* Add different themes or card sets.
* Add animations for matched cards.
* Add a leaderboard system.

## 🛠️ Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/BisuMandi/memory-card-game.git
cd memory-card-game
```

### 2. Install Dependencies

Install all the required packages:

```bash
npm install
```

### 3. Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open the URL in your browser to play the game locally.

### 4. Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🤝 Contributing

Pull requests and suggestions are welcome! If you'd like to contribute, feel free to fork the repository and open a pull request.

---

Made with 💻 and ☕ by [@BisuMandi](https://github.com/BisuMandi)
