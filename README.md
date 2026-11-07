# Chef Grok 🍳

Chef Grok is a small web app where you type in the ingredients you have at home and see them listed on the page. It's built with React and Vite.

## What it does (right now)

- Type an ingredient into the box (e.g. "Rice")
- Click **Add Ingredients** (or press Enter)
- The ingredient appears in the "Ingredients on hand" list

## Built with

- [React](https://react.dev/) – for building the user interface
- [Vite](https://vite.dev/) – for running and building the project quickly
- Plain CSS – for styling
- [Inter](https://fonts.google.com/specimen/Inter) font from Google Fonts

## How to run it on your computer

You need [Node.js](https://nodejs.org/) installed (version 20.19 or newer).

1. Download or clone this project
2. Open the project folder in your terminal
3. Install the packages:

   ```bash
   npm install
   ```

4. Start the app:

   ```bash
   npm run dev
   ```

5. Open the link shown in your terminal (usually `http://localhost:5173`)

## Other commands

| Command           | What it does                            |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Starts the app for development          |
| `npm run build`   | Creates a final version ready to deploy |
| `npm run preview` | Lets you preview the built version      |
| `npm run lint`    | Checks your code for mistakes           |

## Project structure

```
src/
├── assets/            # Images (like the Chef Grok logo)
├── components/
│   ├── Header.jsx          # Logo and app name at the top
│   ├── MainContent.jsx     # The form and the ingredients state
│   └── IngredientsList.jsx # Shows the list of ingredients
├── index.css          # All the styles
└── main.jsx           # Where the app starts
```

## How it works (in plain English)

- `MainContent` keeps a list of ingredients in memory using React's `useState`.
- When you submit the form, the new ingredient is added to that list.
- The list is passed down to `IngredientsList`, which displays each ingredient as a bullet point.

## Ideas for the future

- Remove an ingredient from the list
- Stop duplicate ingredients from being added
- Suggest recipes based on the ingredients you have

## Author

Made by Moses Mwangi – [GitHub](https://github.com/mosesmwangideveloper)
