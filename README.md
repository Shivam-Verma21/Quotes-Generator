# Quotes Generator

A simple React-based Quotes Generator application that fetches and displays random quotes from an API.

## Features
- Fetches a random quote from an API.
- Displays the quote and its author.
- Responsive and minimal UI.
- Uses Axios for API requests.

## Technologies Used
- React.js
- Axios
- Tailwind CSS

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following variables:
   ```env
   VITE_API_URL=<Your API URL>
   VITE_API_KEY=<Your API Key>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
- Click the **Generate** button to fetch and display a new quote.
- The quote and author are fetched dynamically from the API.

## Project Structure
```
.
├── src
│   ├── App.jsx  # Main component
│   ├── App.css  # Styles
│   ├── main.jsx # Entry point
│   └── ...
├── .env         # Environment variables
├── package.json # Dependencies and scripts
└── README.md    # Project documentation
```

## Dependencies
- React.js
- Axios
- Tailwind CSS
