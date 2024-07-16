# MemoFlip

MemoFlip is a single-page application (SPA) memory game built with React. The game challenges your memory skills with a fun and interactive card-flipping experience.

## Table of Contents

- [MemoFlip](#memoflip)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Gameplay](#gameplay)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

MemoFlip is a card memory game where players can choose the difficulty level by selecting the time limit of the game (4 or 7.5 minutes). The objective is to match all pairs of cards before the time runs out. Points are awarded based on the number of attempts it takes to find all matches.

## Gameplay

1. **Choose Difficulty**: At the start, the player is prompted to select the difficulty level by choosing between a 4 minute or 7.5 minute game.
2. **Flip Cards**: Click on cards to flip them over and reveal the images. Try to remember their positions.
3. **Match Cards**: Find and flip matching pairs of cards. When a pair is matched, the cards disappear, and points are awarded based on the number of attempts.
4. **Score Points**: Points range from 5 to 1, depending on how quickly the matches are found.
5. **Countdown Timer**: Successfully match all pairs before time runs out to win the game. If time runs out before all pairs are matched, the game is lost.

## Features

- Responsive design
- Intuitive card-flipping gameplay
- Scoring system based on the number of attempts
- Countdown timer with two options (4 minutes or 7.5 minutes)
- Navigation bar with:
  - **Home**: Introducton and the instructions on how to play the game
  - **Play**: Start and play the memory game

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ntamasa/MemoFlip.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd MemoFlip
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Select the difficulty level by choosing the time limit of the game.
3. Play the game by flipping cards and matching pairs.
4. Use the navigation bar to view the rules or start a new game.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
