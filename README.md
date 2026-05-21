#🎬 Movie Info Website

A responsive movie information website built using React and The Movie Database (TMDb) API.
Users can search for movies, explore trending titles, posters, release dates, and save favorites.

#🚀 Features
- 🔍 Search movies instantly
- 🎥 View movie posters, and release dates
- ❤️ Add movies to favorites
- 📱 Responsive design for mobile and desktop
- ⚡ Fast and clean UI
- 🌐 Real-time movie data using TMDb API

#🛠️ Technologies Used
- React.js
- JavaScript
- CSS
- TMDb API

#📂 Project Structure
movie-info-website/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── css/
│   └── App.jsx
│
├── package.json
└── README.md

#⚙️ Installation & Setup
1️⃣ Clone the repository
    git clone https://github.com/your-username/movie-info-website.git
2️⃣ Open the project folder
    cd movie-info-website
3️⃣ Install dependencies
    npm install
4️⃣ Create .env file

Create a .env file in the root directory and add your TMDb API key:

API_KEY = your_api_key_here
BASE_URL = url

#🔑 Getting TMDb API Key
1. Create an account on TMDb Official Website
2. Go to API settings
3. Generate your API key
4. Copy the key into your .env file

#▶️ Run the Project
npm run dev

The app will start on:

http://localhost:5173

#🌍 API Used
The Movie Database (TMDb) API

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
