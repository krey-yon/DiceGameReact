import './App.css'
import Game from './Components/Game/Game'
import HomePage from './Components/HomePage'
import { useState } from 'react'



function App() {
  const [gameStarted, setGameStarted] = useState(false)

  const toggleGame = () => {
    setGameStarted((prev) => !prev)
  }

  return (
    <>
      {
        gameStarted ? <Game /> : <HomePage toggleGame={toggleGame} />
      }
    </>
  )
}

export default App
