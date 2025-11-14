# FreeGame-Reviews

A responsive web application that loads **free games** from an external
API, displays them as interactive cards, and shows full details when the
user clicks on any game.

## Features

-   Load and display games by categories (MMORPG, Shooter, etc.)
-   Show full details for every game (title, category, platform, status,
    long description, play link)
-   Smooth animations and loading spinner while fetching data
-   Fully responsive UI (mobile + desktop)
-   Uses JavaScript Classes (OOP) for generating game elements
-   Dynamic DOM creation using JavaScript
-   Clean UI and structured code

------------------------------------------------------------------------

## Technologies Used

-   **HTML5**
-   **CSS3**
-   **JavaScript (ES6+)**
-   **Fetch API**
-   **Object-Oriented Programming (OOP)**
-   **Responsive Web Design**

------------------------------------------------------------------------

# Full Step-by-Step Flow of How the Project Works

## 1 Page Load

When the site opens, it automatically calls:

``` javascript
displayGames("mmorpg");
```

This loads the default category and displays its games.

------------------------------------------------------------------------

## 2 displayGames(category)

**File:** `display-games.js`

Responsible for preparing and showing all games:\
- Clears previous game cards\
- Highlights the selected category\
- Calls `request(category)` to fetch the games\
- Appends each created game card into `.games-container`

------------------------------------------------------------------------

## 3 request(category)

**File:** `request.js`

Fetches all games for the chosen category: - Sends a request to the
Free-To-Play Games API\
- For each game, calls `requestById(id)` for extra details\
- Creates a `CreatGame` object\
- Calls `getGame()` to generate the final DOM card\
- Returns all created cards

------------------------------------------------------------------------

## 4 requestById(id)

**File:** `request.js`

Fetches advanced game info:\
- **status**\
- **longDescription**

This allows every game to display full details on click.

------------------------------------------------------------------------

## 5 CreatGame Class

**File:** `creat-game.js`

Represents a single game and builds its card UI:

Stores all properties: 
- title\
- image\
- category\
- platform\
- description\
- status\
- long description (from requestById)

`getGame()` generates the full card: 
- Game image\
- Title\
- Short description\
- Category + platform\
- Adds click event → opens the details layer

------------------------------------------------------------------------

## 6 creatDetailsToTheGame(...)

**File:** `creat-game-details.js`

Controls the game details popup: 
- Shows the details section\
- Fills image, name, category, platform, status, long description\
- Updates "Play Now" link\
- Adds close button\
- Disables body scrolling when open

------------------------------------------------------------------------

# Final Notes

This documentation explains the entire workflow of the project from
loading games to displaying full details.\


