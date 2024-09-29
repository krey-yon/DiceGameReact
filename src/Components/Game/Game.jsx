import { useState } from "react"
import RollDice from "./RollDice"
import ScoreNSelection from "./ScoreNSelection"
import Rules from "./Rules"

function Game() {
  const [score, setScore] = useState(0)
  const [diceNumber, setDiceNumber] = useState(1)
  const [errorr, setErrorr] = useState("")
  const [ selectedNumber, setSelectedNumber ] = useState();
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1 || 1
}
const roleDice = () => {
  if (!selectedNumber) {
    setErrorr("Please select a number")
    return
  }
  setErrorr("")
    setDiceNumber(generateRandomNumber())


    if (selectedNumber === diceNumber) {
      setScore((prevScore) => prevScore + 10)
    }
    else {
      setScore((prevScore) => prevScore - 5)
    }

    setSelectedNumber(null) 
}
  const resetScore = () => {
    setScore(0)
  }


  
  return (
    <>
      <ScoreNSelection 
      selectedNumber={selectedNumber}
      setSelectedNumber={setSelectedNumber}
      score={score}
      error={errorr}
      />
      <RollDice 
      diceNumber={diceNumber}
      roleDice={roleDice}
      resetScore={resetScore}
      showRules={showRules}
      setShowRules={setShowRules}
      />
      {showRules && <Rules />}
    </>
  )
}

export default Game