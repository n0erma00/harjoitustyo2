import './App.css';
import {useState, useEffect} from 'react';

const URL = 'https://animechan.vercel.app/api/random';

function App() {

  const [anime, setAnime] = useState('');
  const [char, setChar] = useState('');
  const [quo, setQuo] = useState('');

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(quote => console.log(quote))
      
  }, [])
  

  return (
    <div id="container">
      <h1>Animequotet</h1>
      <h2>Anime: {anime}</h2>
      <h3>Hahmo: {char}</h3>
      <p>Quote: {quo}</p>
      <button>Uusi</button>
    </div>
  );
}

export default App;
