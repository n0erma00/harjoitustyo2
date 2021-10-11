import './App.css'
import { useState, useEffect } from 'react'
import Search from './components/Search'

const URL = 'https://animechan.vercel.app/api/random'

function App () {
  const [anime, setAnime] = useState('')
  const [char, setChar] = useState('')
  const [quo, setQuo] = useState('')
  const [name, setName] = useState('')      /*Ei riitä taidot tähän haun toteuttamiseen että saisin inputista nimen tuonne toiselle 
                                            konponentille asti */

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        setAnime(response.anime)
        setChar(response.character)
        setQuo(response.quote)
      })
  }, [])

  return (
    <div id='container'>
      <h1>Anime quote of the day</h1>
      <h2>Anime title: {anime}</h2>
      <h3>Character: {char}</h3>
      <p id="quote">Quote: " {quo} "</p>
      <button onClick={() => window.location.reload(false)}>New Quote</button>
      <button onClick={() => Search()}>Search by character</button>  {/*haku ei toimi*/}
      <input placeholder='character' onChange={e => setName(e.target.value)}></input>
    </div>
  )
}

export default App
