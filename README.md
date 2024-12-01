Sliding Puzzle Game
Description
A simple 5x5 sliding puzzle game where players rearrange tiles to restore an image to its original order. One tile is missing, allowing players to slide adjacent tiles into the empty space.

Features
Dynamic Grid: Generates a randomized 5x5 grid with shuffled images.
Drag-and-Drop: Players can move tiles using drag-and-drop functionality.
Win Condition: Detects when the puzzle is solved and displays a success message.
Technologies Used
HTML: Structure of the game grid.
CSS: Styling for tiles and layout.
JavaScript: Logic for game functionality, including shuffling, movement, and win detection.
How to Run
Clone or download the project.
Place all required image files in the image/ folder (e.g., 1.jpg, 2.jpg, ..., 24.jpg).
Open the index.html file in a web browser.
How to Play
The game starts with a shuffled grid of tiles.
Drag a tile into the adjacent empty space to move it.
Rearrange all tiles into the correct order to win the game.
Folder Structure
bash
Copy code
puzzle-game/
│
├── index.html         # Main HTML file
├── style.css          # Optional (add styling here)
├── script.js          # Game logic
└── image/             # Folder containing puzzle images
    ├── 1.jpg
    ├── 2.jpg
    ├── ...
    └── 24.jpg
Customization
Replace the images in the image/ folder to create custom puzzles.
Adjust grid size or styles in script.js and style.css.
