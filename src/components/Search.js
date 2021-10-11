import './Search.css'
import { useState, useEffect } from 'react'


const URL_2 = 'https://animechan.vercel.app/api/quotes/character?name='

export default function Search () {
  
  const [name, setName] = useState('')
  const [anime2, setAnime2] = useState('')
  const [char2, setChar2] = useState('')      
  const [quo2, setQuo2] = useState('')

  console.log(name)
  console.log(URL_2)

  useEffect(() => {
    fetch(URL_2 + name)
      .then(response => response.json())              
      .then(response => {
        setAnime2(response.anime)
        setChar2(response.character)        
        setQuo2(response.quote)
      })
  }, [])

  return (
    <div>
      <h2>Anime title: {anime2}</h2>
      <h3>Character: {char2}</h3>
      <p id='quote'>Quote: " {quo2} "</p>   
    </div>
  )
}
